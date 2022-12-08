import { Reservation } from './entities/reservation.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Repository } from 'typeorm';
import { ChangeReservationStatusDto } from './dto/change-reservation-status.dto';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation)
        private reservationRepository: Repository<Reservation>,
    ) {}

    async create(createReservationDto: CreateReservationDto) {
        const newReservations = [];
        for await (const horary of createReservationDto.horaryId) {
            let approved = false;

            if (createReservationDto.horaryId.length < 4) {
                approved = true;
            }
            const newReservation = await this.reservationRepository.save({
                user_id: createReservationDto.userId,
                room_id: createReservationDto.roomId,
                date: createReservationDto.date,
                horary_id: horary,
                creation_date_time: new Date().toLocaleString(),
                approved,
            } as any);

            newReservations.push(newReservation);
        }

        return newReservations;
    }

    async findAll() {
        try {
            const [result, total] = await this.reservationRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.error('Falha ao buscar reservas');
        }
    }

    async findOne(user_id: number, room_id: number, horary_id: number) {
        try {
            const findReservation = await this.reservationRepository.findOne({ where: { user_id, room_id, horary_id } });

            return findReservation;
        } catch (error) {
            console.error(`Falha ao buscar a reserva`);
        }
    }

    async update(user_id: number, room_id: number, horary_id: number, updateReservationDto: UpdateReservationDto) {
        try {
            const updateReservation = await this.reservationRepository.update({ user_id, room_id, horary_id }, updateReservationDto as any);

            return updateReservation;
        } catch (error) {
            console.error(`Falha ao atualizar a reserva`);
        }
    }

    async remove(user_id: number, room_id: number, horary_id: number) {
        try {
            const deleteReservation = await this.reservationRepository.delete({ user_id, room_id, horary_id });

            return deleteReservation;
        } catch (error) {
            console.error(`Falha ao remover a reserva`);
        }
    }

    async changeReservationStatus(data: ChangeReservationStatusDto) {
        try {
            const reservation = await this.reservationRepository.findOneOrFail({ where: { sequence: data.sequence } });

            reservation.approved = data.status;

            await this.reservationRepository.save(reservation);
        } catch (error) {
            throw new NotFoundException(error, 'Falha ao mudar status da reserva');
        }
    }
}

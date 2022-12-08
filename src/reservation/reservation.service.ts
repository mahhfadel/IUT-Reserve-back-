import { Reservation } from './entities/reservation.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {

    constructor(
        @InjectRepository(Reservation)
        private reservationRepository: Repository<Reservation>,
    ) {}

    async create(createReservationDto: CreateReservationDto) {
        this.reservationRepository.create(createReservationDto);
        return null;
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
            const updateReservation = await this.reservationRepository.update({ user_id, room_id, horary_id }, updateReservationDto);

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
}

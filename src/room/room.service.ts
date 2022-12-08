import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
    constructor(@InjectRepository(Room) private roomRepository: Repository<Room>) {}
    async create(createRoomDto: CreateRoomDto) {
        try {
            const room = plainToInstance(Room, createRoomDto);

            const newRoom = await this.roomRepository.save(room);

            return newRoom;
        } catch (error) {
            console.error(error);
            console.log('Falha ao criar sala');
        }
    }

    async findAll() {
        try {
            const [result, total] = await this.roomRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.log('Falha ao buscar salas');
        }
    }

    async findOne(id: number) {
        try {
            const room = await this.roomRepository.findOne({ where: { id } });

            return room;
        } catch (error) {
            console.log('Falha ao buscar sala');
        }
    }

    async update(id: number, updateRoomDto: UpdateRoomDto) {
        try {
            const updateRoom = await this.roomRepository.update({ id }, updateRoomDto);

            return updateRoom;
        } catch (error) {
            console.log('Falha ao editar sala');
        }
    }

    async remove(id: number) {
        try {
            const deleted = await this.roomRepository.delete({ id });

            return deleted;
        } catch (error) {
            console.log('Falha ao deletar sala');
        }
    }
}

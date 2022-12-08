import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHoraryDto } from './dto/create-horary.dto';
import { UpdateHoraryDto } from './dto/update-horary.dto';
import { Horary } from './entities/horary.entity';

@Injectable()
export class HoraryService {
    constructor(
        @InjectRepository(Horary)
        private horaryRepository: Repository<Horary>,
    ) {}

    async create(createHoraryDto: CreateHoraryDto) {
        return null;
    }

    async findAll() {
        try {
            const [result, total] = await this.horaryRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.error('Falha ao buscar horários');
        }
    }

    async findOne(id: number) {
        try {
            const findHorary = await this.horaryRepository.findOne({ where: { id } });

            return findHorary;
        } catch (error) {
            console.error(`Falha ao buscar o horário de id: ${id}`);
        }
    }

    async update(id: number, updateHoraryDto: UpdateHoraryDto) {
        try {
            const updateHorary = await this.horaryRepository.update(id, updateHoraryDto);

            return updateHorary;
        } catch (error) {
            console.error(`Falha ao atualizar o horário de id: ${id}`);
        }
    }

    async remove(id: number) {
        try {
            const deleteHorary = await this.horaryRepository.delete(id);

            return deleteHorary;
        } catch (error) {
            console.error(`Falha ao remover o horário de id: ${id}`);
        }
    }
}

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
        return `This action returns a #${id} horary`;
    }

    async update(id: number, updateHoraryDto: UpdateHoraryDto) {
        return `This action updates a #${id} horary`;
    }

    async remove(id: number) {
        return `This action removes a #${id} horary`;
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(Group)
        private groupRepository: Repository<Group>,
    ) {}

    async create(createGroupDto: CreateGroupDto) {
        return null;
    }

    async findAll() {
        try {
            const [result, total] = await this.groupRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.error('Falha ao buscar grupos');
        }
    }

    async findOne(id: number) {
        try {
            const findGroup = await this.groupRepository.findOne({ where: { id } });

            return findGroup;
        } catch (error) {
            console.error(`Falha ao buscar o grupo de id: ${id}`);
        }
    }

    async update(id: number, updateGroupDto: UpdateGroupDto) {
        try {
            const updateGroup = await this.groupRepository.update(id, updateGroupDto);

            return updateGroup;
        } catch (error) {
            console.error(`Falha ao atualizar o grupo de id: ${id}`);
        }
    }

    async remove(id: number) {
        try {
            const deleteGroup = await this.groupRepository.delete(id);

            return deleteGroup;
        } catch (error) {
            console.error(`Falha ao remover o grupo de id: ${id}`);
        }
    }
}

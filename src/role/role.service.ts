import { Role } from './entities/role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
    ) {}

    async create(createRoleDto: CreateRoleDto) {
        return null;
    }

    async findAll() {
        try {
            const [result, total] = await this.roleRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.error('Falha ao buscar role');
        }
    }

    async findOne(id: number) {
        try {
            const findRole = await this.roleRepository.findOne({ where: { id } });

            return findRole;
        } catch (error) {
            console.error(`Falha ao buscar o role de id: ${id}`);
        }
    }

    async update(id: number, updateRoleDto: UpdateRoleDto) {
        try {
            const updateRole = await this.roleRepository.update(id, updateRoleDto);

            return updateRole;
        } catch (error) {
            console.error(`Falha ao atualizar o role de id: ${id}`);
        }
    }

    async remove(id: number) {
        try {
            const deleteRole = await this.roleRepository.delete(id);

            return deleteRole;
        } catch (error) {
            console.error(`Falha ao remover o role de id: ${id}`);
        }
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        return null;
    }

    async findAll() {
        try {
            const [result, total] = await this.userRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.error('Falha ao buscar usuários');
        }
    }

    async findOne(id: number) {
        try {
            const findUser = await this.userRepository.findOne({ where: { id } });

            return findUser;
        } catch (error) {
            console.error(`Falha ao buscar o usuário de id: ${id}`);
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        try {
            const updateUser = await this.userRepository.update(id, updateUserDto);

            return updateUser;
        } catch (error) {
            console.error(`Falha ao atualizar o usuário de id: ${id}`);
        }
    }

    async remove(id: number) {
        try {
            const deleteUser = await this.userRepository.delete(id);

            return deleteUser;
        } catch (error) {
            console.error(`Falha ao remover o usuário de id: ${id}`);
        }
    }
}

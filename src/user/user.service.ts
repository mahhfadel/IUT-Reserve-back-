import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { GroupService } from 'src/group/group.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { compareSync } from 'bcrypt';
import { ChangeUserStatusDto } from './dto/change-user-status.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly groupService: GroupService,
    ) {}

    async create(createUserDto: CreateUserDto) {
        try {
            const bla = { ...createUserDto, role_id: 2, group_id: createUserDto.groupId, status: false };

            const user = plainToInstance(User, bla);

            const newUser = await this.userRepository.save(user);

            return newUser;
        } catch (error) {
            console.error(error);
            console.log('Falha ao cadastrar usuário');
        }
    }

    async findAll() {
        try {
            const [result, total] = await this.userRepository.findAndCount();

            return {
                result,
                total,
            };
        } catch (error) {
            console.error(error);
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

    async login(data: LoginDto) {
        try {
            const user = await this.userRepository.findOneOrFail({ where: { email: data.email } });

            if (user.status) {
                const valid = compareSync(data.password, user.password);

                if (valid) {
                    return user;
                }
            }
        } catch (e) {
            console.log('Usuário não encontrado');
        }
    }

    async changeUserStatus(data: ChangeUserStatusDto) {
        try {
            const user = await this.findOne(data.userId);

            user.status = data.status;

            await this.userRepository.save(user);
        } catch (error) {
            console.log('Falha ao mudar situação do usuário');
        }
    }
}

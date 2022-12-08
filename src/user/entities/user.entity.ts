import { Group } from 'src/group/entities/group.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Role } from 'src/role/entities/role.entity';
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { hashSync } from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role_id: number;

    @Column()
    group_id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    contact: string;

    @Column()
    status: boolean;

    @ManyToOne(() => Role, () => User)
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @ManyToOne(() => Group, () => User)
    @JoinColumn({ name: 'group_id' })
    group: Group;

    @OneToMany(() => Reservation, () => User)
    reservations: Reservation[];

    @BeforeInsert()
    encryptPassword = () => {
        this.password = hashSync(this.password, 10);
    };
}

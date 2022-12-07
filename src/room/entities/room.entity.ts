import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameLuis: string;

    @Column()
    code: string;

    @Column()
    information: string;

    @OneToMany(() => Reservation, () => Room)
    reservation: Reservation;
}

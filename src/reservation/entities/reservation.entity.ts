import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    sequence: number;

    @PrimaryColumn()
    user_id: number;

    @Column()
    room_id: number;

    @Column({ type: 'timestamptz' })
    creation_date_time: Date;

    @Column()
    approved: boolean;

    @Column({ type: 'date' })
    date: string;

    @Column()
    horary_id: number;

    @ManyToOne(() => User, () => Reservation)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Room, () => Reservation)
    @JoinColumn({ name: 'room_id' })
    room: Room;
}

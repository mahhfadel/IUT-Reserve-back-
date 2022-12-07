import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Horary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time with time zone' })
    initial_time: string;

    @Column({ type: 'time with time zone' })
    final_time: string;
}

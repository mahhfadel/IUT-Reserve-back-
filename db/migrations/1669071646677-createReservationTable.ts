import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createReservationTable1669071646677 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'reservation',
                columns: [
                    {
                        name: 'user_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'room_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'creation_date_time',
                        type: 'timestamptz',
                        isNullable: false,
                    },
                    {
                        name: 'approved',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'horary_id',
                        type: 'int',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_reservation_user',
                        referencedColumnNames: ['id'],
                        referencedTableName: 'user',
                        columnNames: ['user_id'],
                    },
                    {
                        name: 'fk_reservation_room',
                        referencedColumnNames: ['id'],
                        referencedTableName: 'room',
                        columnNames: ['room_id'],
                    },
                    {
                        name: 'fk_reservation_horary',
                        referencedColumnNames: ['id'],
                        referencedTableName: 'horary',
                        columnNames: ['horary_id'],
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reservation');
    }
}

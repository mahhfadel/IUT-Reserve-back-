import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterReservationTable1670531521485 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'reservation',
            new TableColumn({
                name: 'sequence',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('reservation', 'sequence');
    }
}

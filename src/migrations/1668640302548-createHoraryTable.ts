import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createHoraryTable1668640302548 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'horary',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'initial_date',
                        type: 'time',
                        isNullable: false,
                    },
                    {
                        name: 'final_date',
                        type: 'time',
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('horary');
    }
}

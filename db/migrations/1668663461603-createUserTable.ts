import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserTable1668663461603 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'contact',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'boolean',
                        isNullable: false,
                    },
                    {
                        name: 'role_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'group_id',
                        type: 'int',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_group',
                        columnNames: ['group_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'group',
                    },
                    {
                        name: 'fk_role',
                        columnNames: ['role_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'role',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}

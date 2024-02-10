import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1707586141422 implements MigrationInterface {
    name = 'CreateUsersTable1707586141422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(120) NOT NULL, "phoneNumber" character varying(11) NOT NULL, CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1707415217791 implements MigrationInterface {
    name = 'CreateUserTable1707415217791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(120) NOT NULL, "celphone" character varying(11) NOT NULL, "reset_password" character varying, CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

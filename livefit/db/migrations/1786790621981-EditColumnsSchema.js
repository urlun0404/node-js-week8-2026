/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class EditColumnsSchema1786790621981 {
    name = 'EditColumnsSchema1786790621981'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "COURSE" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "COURSE" ADD "name" character varying(100) NOT NULL`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "COURSE" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "COURSE" ADD "name" character varying(50) NOT NULL`);
    }
}

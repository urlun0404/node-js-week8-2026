const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Grade",
  tableName: "GRADE",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
      nullable: false,
    },
    score: {
      type: "int",
      nullable: false,
    },
    retake_score: {
      type: "int",
      nullable: true,
    },
  },
  relations: {
    student: {
      target: "Student",
      type: "many-to-one",
      nullable: false,
      joinColumn: {
        name: "student_id",
      },
    },
    subject: {
      target: "Subject",
      type: "many-to-one",
      nullable: false,
      joinColumn: {
        name: "subject_id",
      },
    },
  },
});

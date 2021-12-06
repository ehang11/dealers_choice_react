const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_react",
  {}
);
const { STRING, UUID, UUIDV4 } = Sequelize.DataTypes;

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { conn, syncAndSeed };

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "mysql",
  storage: './__tests__/database.sqlite',
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true, // cria os campos created_at e updated_at em todas as tabelas
    underscored: true, // padroniza a criação dos nomes das tabelas para o formato com underline. Ex: user_groups
    underscoredAll: true  // padroniza a criação dos nomes do campos das tabelas para o formato com underline. Ex: user_email
  }

}

// const { User } = require('./../../src/app/models');

// describe('Suite Users', () => {
//   it('Deve retorna um titulo', () => {
//     const t1 = 'Titulo 1';
//     const t2 = 'Titulo 1';
//     expect(t1).toBe(t2);
//   });

  // it('Deve cadastrar um usuário', async () => {
  //   const user = await User.create({
  //     name: 'User One',
  //     email: 'userone@example.com',
  //     password: '123456'
  //   });

  //   console.log(user);

  //   expect(user.email).toBe('userone@example.com');
  // });
// });

const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {

  beforeEach(async () => {
    await truncate(); // limpa a base de dados antes de cada caso de teste
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "User One",
      email: "userone@example.com",
      password: "123456"
    });

    // const hash = await bcrypt.hash('123456', 8);
    // expect(user.password_hash).toBe(hash);

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
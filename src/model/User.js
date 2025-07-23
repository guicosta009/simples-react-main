class User {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  saudacao() {
    return `Olá, ${this.nome}!`;
  }
}

export default User; 
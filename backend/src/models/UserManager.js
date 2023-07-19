const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, password, mail) values (?, ?, ?)`,
      [user.username, user.hashedPassword, user.email]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, password = ?, mail = ? where id = ?`,
      [user.username, user.hashedPassword, user.mail, user.id]
    );
  }

  findUserByUsername(username) {
    return this.database.query(
      `select id, username, password, is_admin as role from  ${this.table} where username = ?`,
      [username]
    );
  }
}

module.exports = UserManager;

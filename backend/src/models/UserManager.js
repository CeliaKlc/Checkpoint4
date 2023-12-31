const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname,lastname ,username, password, mail) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.hashedPassword,
        user.email,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?  ,username = ?, password = ?, mail = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.hashedPassword,
        user.mail,
        user.id,
      ]
    );
  }

  isAdmin(id) {
    return this.database.query(
      `update ${this.table} set is_admin=true where id = ?`,
      [id]
    );
  }

  findUserByUsername(username) {
    return this.database.query(
      `select id, username, password, is_admin as role from  ${this.table} where username = ?`,
      [username]
    );
  }

  new(req) {
    return this.database.query(
      `update ${this.table} set image = ? where id = ?`,
      [req.body.imgURL, req.payload.sub]
    );
  }

  create(user) {
    return this.database.query(
      `insert into ${this.table} (firstname,lastname ,username, password, mail, is_admin) values (?, ?, ?, ?, ?,true)`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.hashedPassword,
        user.email,
      ]
    );
  }
}

module.exports = UserManager;

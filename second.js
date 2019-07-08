const readline = require('readline-sync');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qqwwee@localhost/zeta_test');
const { table } = require('table');

sequelize
  .authenticate()
  .then(() => {
    let question = readline.keyInYN('Akarsz insertelni?');
    console.log(question);
    if (question === true) {
      let name = readline.question('Name:');
      let desc = readline.question('Description:');
      let str = 'insert into games (name, description) values ("' + name + '","' + desc + '");';
      sequelize.query(str);
    }
    sequelize.query('select * from games').then(result => {
      const rows = result[0];
      const matrix = [];
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        matrix.push([
          row.id,
          row.name,
          row.description
        ]);
      }
      console.log(table(matrix));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

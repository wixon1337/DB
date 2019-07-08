const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qqwwee@localhost/zeta_test');
console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      console.log(result);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

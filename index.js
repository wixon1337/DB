const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qqwwee@localhost/zeta_test');
const { table } = require('table');

// console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
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

/*   [ [ TextRow { id: 1, name: 'Mario Kart 64', description: 'its a cool game' },
  TextRow { id: 2, name: 'Super Bomberman', description: 'Kinga is the best' },
  TextRow { id: 3, name: 'Diddy Kong Racing 64', description: 'pfuj' },
  TextRow { id: 4, name: 'StarCraft', description: '<3' },
  TextRow { id: 5, name: 'Warcraft II', description: 'nem tudom' },
  TextRow { id: 6, name: 'Theme Hospital', description: 'Kstasi\'s favorite' } ],
[ TextRow { id: 1, name: 'Mario Kart 64', description: 'its a cool game' },
  TextRow { id: 2, name: 'Super Bomberman', description: 'Kinga is the best' },
  TextRow { id: 3, name: 'Diddy Kong Racing 64', description: 'pfuj' },
  TextRow { id: 4, name: 'StarCraft', description: '<3' },
  TextRow { id: 5, name: 'Warcraft II', description: 'nem tudom' },
  TextRow { id: 6, name: 'Theme Hospital', description: 'Kstasi\'s favorite' } ] ] */

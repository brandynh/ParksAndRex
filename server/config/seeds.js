const db = require('./connection');
const {
   User,
   Category
} = require('../models');

db.once('open', async () => {
   await Category.deleteMany();

   await Category.insertMany([{
         name: 'Gift Shop'
      },
      {
         name: 'Expeditions'
      },
      {
         name: 'Sprints'
      },
      {
         name: 'Membership'
      },
      {
         name: 'Rewards'
      }
   ]);
   console.log('categories seeded')

   await User.deleteMany();

   await User.create({
      firstName: 'Joshua',
      lastName: 'Diehl',
      email: 'jdiehl@testmail.com',
      password: 'password11'
   });

   console.log('users seeded');

   process.exit();
});
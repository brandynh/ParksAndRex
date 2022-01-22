const db = require('./connection');
const {
   User,
   Category,
   Package
} = require('../models');

db.once('open', async () => {
   // await Category.deleteMany();

   // await Category.insertMany([{
   //       name: 'Gift Shop'
   //    },
   //    {
   //       name: 'Expeditions'
   //    },
   //    {
   //       name: 'Sprints'
   //    },
   //    {
   //       name: 'Membership'
   //    },
   //    {
   //       name: 'Rewards'
   //    }
   // ]);
   // console.log('categories seeded')

   await Package.deleteMany();

   const package = await Package.insertMany([
      {
         name: 'Velociraptor Package',
         description: 'For those wanting',
         image: '',
         price: '20,000',
      },
      {
         name: 'T-Rex Package',
         description: '',
         image:'',
         price: '50,000',  
      },
      {
         name: 'Brontosaurus Package',
         description: '',
         image: '',
         price: '100,000'
      }
   ]);

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
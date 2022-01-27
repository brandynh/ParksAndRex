const db = require('./connection');
const {
   User,
   Category,
   Package,
   Perk
} = require('../models');

db.once('open', async () => {

   await Perk.deleteMany();

   await Perk.insertMany([
      {
         description: 'General admission to the park for one full day. Includes access to the herbivore garden, raptor pen, and Psittacosaurus petting zoo (signed waiver required)'
      },
      {
         description: 'Tickets to the T-Rex feeding show (T-Rex sighting not guaranteed)'
      },
      {
         description: 'Guided Jeep tour inside of the Stegosauraus grazing grounds'
      },
      {
         description: 'Tour of the dinosaur egg hatching facility (no cameras allowed)'
      },
      {
         description: 'Submarine tour of the aquatic dinosaur pool'
      },
      {
         description: 'Hang-Gliding with the Pterodactyls!'
      }
   ]);

   await Package.deleteMany();

   await Package.insertMany([
      {
         name: 'Velociraptor Package',
         description: 'For those wanting to experience the foundation of what makes Parks and Rex the premier safari adventure on Earth!',
         perks: [],
         image: '',
         price: '20000',
      },
      {
         name: 'T-Rex Package',
         description: 'If you really want to sink your teeth into everything that Parks and Rex has to offer, the T-Rex package has you covered.',
         perks: [],
         image:'',
         price: '50000',  
      },
      {
         name: 'Brontosaurus Package',
         description: 'The ultimate experience. With the Brontosaurus package, nothing in Parks and Rex will be out of your reach',
         perks: [],
         image: '',
         price: '100000'
      }
   ]);

   await User.deleteMany();

   await User.create({
      username: 'Badassasaurus',
      firstName: 'Joshua',
      lastName: 'Diehl',
      email: 'jdiehl@testmail.com',
      password: 'password11'
   });

   console.log('users seeded');

   process.exit();
});
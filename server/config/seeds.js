const db = require('./connection');
const {
   User,
   Package,
   Perk
} = require('../models');

db.once('open', async () => {

   await Perk.deleteMany();

   const perks = await Perk.insertMany([
      {
         name: 'General admission',
         description: 'General admission to the park for one full day. Includes access to the herbivore garden, raptor pen, and Psittacosaurus petting zoo (signed waiver required)'
      },
      {
         name: 'T-Rex feeding',
         description: 'Tickets to the T-Rex feeding show (T-Rex sighting not guaranteed)'
      },
      {
         name: 'Guided Jeep tour',
         description: 'Guided Jeep tour inside of the Stegosauraus grazing grounds'
      },
      {
         name: 'Dino egg hatching',
         description: 'Tour of the dinosaur egg hatching facility (no cameras allowed)'
      },
      {
         name: 'Submarine tour',
         description: 'Submarine tour of the aquatic dinosaur pool'
      },
      {
         name: 'Hang-Gliding',
         description: 'Hang-Gliding with the Pterodactyls!'
      }
   ]);

   await Package.deleteMany();

   await Package.insertMany([
      {
         name: 'Velociraptor Package',
         description: 'For those wanting to experience the foundation of what makes Parks and Rex the premier safari adventure on Earth!',
         perks: [perks[0], perks[1]],
         image: 'dinoTestImg',
         price: '$199',
      },
      {
         name: 'T-Rex Package',
         description: 'If you really want to sink your teeth into everything that Parks and Rex has to offer, the T-Rex package has you covered.',
         perks: [perks[0], perks[1], perks[2], perks[3]],
         image:'dinoPark',
         price: '$499',
      },
      {
         name: 'Brontosaurus Package',
         description: 'The ultimate experience. With the Brontosaurus package, nothing in Parks and Rex will be out of your reach',
         perks: [perks[0], perks[1], perks[2], perks[3], perks[4], perks[5]],
         image: 'dinoPark2',
         price: '$999'
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

   console.log('Data seeded');

   process.exit();
});
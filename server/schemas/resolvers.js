const { AuthenticationError } = require('apollo-server-express');
const { User, Perk, Package, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51KLbiADzqI05yRaXswNjugRVLmveyxn6iUB5m1rguhLoDq4LAzlMNacaAYtn0FaR9e2AfgJexChuzl29PHHsHM8J00skGklFfw');

const resolvers = {
  Query: {

    packages: async (parent, args) => {
      
        const packages = await Package.find({}).populate('perks');

        return packages;
    
    },
    
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { packages } = await order.populate('packages').execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, {...data}) => {
      const user = await User.create({...data});
      const token = signToken(user);

      return { token, user };
    },
     
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;

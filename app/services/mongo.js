const mongoose = require('mongoose');

const url =
  'mongodb+srv://username:password@cluster0.0lqfcvh.mongodb.net/?retryWrites=true&w=majority';

(async () => {
  try {
    await mongoose.connect(url);
    console.log('connected to mongo');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

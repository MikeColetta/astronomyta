const User = require('../models/users');
const Post = require('../models/Post');
const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/astronomyta",
    function () {
        mongoose.connection.db.dropDatabase();
    },
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

const mikePost = {
    text: 'New Post!',
    imageLink: 'https://images-assets.nasa.gov/image/8003541/8003541~thumb.jpg',
    description: 'High Energy Astronomy Observatory (HEAO)'
}

const mikeUser = {
    name: 'Mike',
    email: 'mike@mail.com',
    password: 'password123'
}

User.create(mikeUser)
    .then(res => console.log(res))
    .catch(err => console.error(err))

Post.create(mikePost)
     .then(res => console.log(res))
     .catch(err => console.error(err))
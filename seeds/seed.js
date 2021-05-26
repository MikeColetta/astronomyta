const User = require('../models/users');
// const Post = require('../models/Post');
const mongoose = require('mongoose');

const users = [
    {
        name: 'Parm',
        email: 'parm@mail.com',
        password: 'password123'
    },
    {
        name: 'Mike',
        email: 'mike@mail.com',
        password: 'password123'   
    },
    {
        name: 'Debasu',
        email: 'debasu@mail.com',
        password: 'password123'   
    },
    {
        name: 'Haram',
        email: 'haram@mail.com',
        password: 'password123'   
    },
    {
        name: 'Patrick',
        email: 'patrick@mail.com',
        password: 'password123'   
    },
    {
        name: 'Colin',
        email: 'colin@mail.com',
        password: 'password123'   
    },
]


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/astronomyta",
    // function () {
    //     mongoose.connection.db.dropDatabase();
    // },
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

// const mikePost = {
//     text: 'New Post!',
//     imageLink: 'https://images-assets.nasa.gov/image/8003541/8003541~thumb.jpg',
//     description: 'High Energy Astronomy Observatory (HEAO)'
// }



User.create(users)
    .then(res => {
        console.log(`Users added ${res}`)
        process.exit(0)
    })
    .catch(err => console.error(err))

// Post.create(mikePost)
//      .then(res => console.log(res))
//      .catch(err => console.error(err))
const db = require("../models")

module.exports = {
<<<<<<< HEAD
    findAll: function(req, res) {
=======
    findAll: function (req, res) {
>>>>>>> main
        db.Post.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
<<<<<<< HEAD
    findById: function(req, res) {
=======
    findById: function (req, res) {
>>>>>>> main
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
<<<<<<< HEAD
    create: function(req, res) 
        {
        console.log(req.body);
        if (!req.body.commentTemp) {
            db.Post.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        } else {
            let commentData = req.body.commentTemp
            let data = req.body
            delete data.commentTemp
            db.Post.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        
        // db.Post.create(req.body)
        //         console.log(req.body)
        //         .then(dbModel => res.json(dbModel))
        //         .catch(err => res.status(422).json(err))
        }
    },
    update: function(req, res) {
        console.log(req.body)
        update = { $push: {comments: req.data}}
        db.Post.findByIdAndUpdate(req.params.id, req.body)
=======
    create: function (req, res) {
        console.log(req.body);
        if (!req.body.comments) {
            db.Post.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => {
                    res.status(422).json(err)
                    console.log(err)
                })
        } else {
            let commentData = req.body.comments
            let data = req.body
            delete data.comments
            db.Post.create(data)
                .then(dbModel => res.json(dbModel))
                .catch(err => {
                    res.status(422).json(err)
                    console.log(err)
                }
            )
        }
    },
    update: function (req, res) {
        console.log(req.body)
        let filter = { _id: req.params.id }
        let update = { $push: { comments: req.body } }
        // let update = req.body
        db.Post.findByIdAndUpdate(filter, update, { new: true })
>>>>>>> main
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};
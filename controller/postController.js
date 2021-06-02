const db = require("../models")

module.exports = {
    findAll: function(req, res) {
        db.Post.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        // console.log(req.body);
        // if (!req.body.commentTemp) {
        //     db.Post.create(req.body)
        //         .then(dbModel => res.json(dbModel))
        //         .catch(err => res.status(422).json(err))
        // } else {
        //     let commentData = req.body.commentTemp
        //     let data = req.body
        //     delete data.commentTemp
        //     db.Post.create(req.body)
        //         .then(dbModel => res.json(dbModel))
        //         .catch(err => res.status(422).json(err))
        // }
        db.Post.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        
    },
    update: function(req, res) {
        update = { $push: {comments: req.data}}
        db.Post.findByIdAndUpdate(req.params.id, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};
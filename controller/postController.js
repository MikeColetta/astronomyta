const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db.Post.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
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
        db.Post.findByIdAndUpdate(filter, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    //Comment update
    // update: function (req, res) {
    //     console.log(req.body)
    //     let filter = { _id: req.params.id }
    //     let update = { $push: { comments: req.body } }
    //     // let update = req.body
    //     db.Post.findByIdAndUpdate(filter, update, { new: true })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // },
};
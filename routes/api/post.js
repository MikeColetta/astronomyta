const router = require('express').Router();
const postController = require('../../controller/postController');

router.route('/')
    .get(postController.findAll)
    .post(postController.create)

router.route('/:id')
    .get(postController.findById)
    // .put(postController.update)

module.exports = router;
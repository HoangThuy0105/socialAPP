import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost, getPostsByUserId, commentPost } from '../controllers/postsController.js'
import { middlewareController } from '../controllers/middlewareController.js'
const router = express.Router();

import multer from 'multer';

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, filename + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/', middlewareController.verifyToken, getPosts)
router.post('/getPostsByUserId', middlewareController.verifyToken, getPostsByUserId)
router.post('/create', upload.array("images"), middlewareController.verifyToken, createPost)
router.post('/update', upload.array("images"), middlewareController.verifyToken, updatePost)
router.post('/comment', middlewareController.verifyToken, commentPost)
router.delete('/:id', middlewareController.verifyToken, deletePost)
router.put('/:id/like', middlewareController.verifyToken, likePost)

export default router
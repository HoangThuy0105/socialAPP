import express from 'express';
import { userController } from '../controllers/userController.js';
import { middlewareController } from '../controllers/middlewareController.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, filename + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.get("/", middlewareController.verifyToken, userController.getAllUsers)
router.post('/editProfile', upload.array("avatar"), middlewareController.verifyToken, userController.editProfile)
router.post('/searchUsers', middlewareController.verifyToken, userController.findUsers)
router.get('/:id/getUserById', middlewareController.verifyToken, userController.getUserById)
router.get('/followers/:userId', middlewareController.verifyToken, userController.getFollowers)
router.get('/following/:userId', middlewareController.verifyToken, userController.getFollowings)
router.post('/:id/checkFollow', userController.checkFollow)
router.put('/:id/follow', middlewareController.verifyToken, userController.follow)
router.put('/:id/unFollow', middlewareController.verifyToken, userController.unFollow)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)

export default router
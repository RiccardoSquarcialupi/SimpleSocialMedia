import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/UserController.js'
import authMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',authMiddleware, updateUser)
router.delete('/:id',authMiddleware, deleteUser)
router.put('/:id/follow',authMiddleware, followUser)
router.put('/:id/unfollow',authMiddleware, unfollowUser)

export default router
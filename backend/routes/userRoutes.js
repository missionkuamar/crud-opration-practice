import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

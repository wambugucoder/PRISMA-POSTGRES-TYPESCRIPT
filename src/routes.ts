import * as express from 'express';
import { createPost, deletePost, getAllPosts, updatePost } from './controller/postController';
import { getUser } from './controller/user';

const router = express.Router();

// User routes...

router.get('/users', getUser);

// Post Controller
router.post('/post', createPost);
router.get('/post', getAllPosts);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router;

import * as express from 'express';
import { createPost, getAllPosts } from './controller/postController';
import { getUser } from './controller/user';

const router = express.Router();

// User routes

router.get('/users', getUser);

// Post Controller
router.post('/post', createPost);
router.get('/post',getAllPosts);

export default router;

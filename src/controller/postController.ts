import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorEmail } = req.body;
  await prisma.post.create({
    data: {
      title, content, published: false,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    },
  })
    .then((created) => {
      res.status(200).json(created);
    })
  .catch((err) => {
    res.status(500).json(err);
  });
};

export const getAllPosts = async (req: Request, res: Response) => {
  await prisma.post.findMany({

    include: { author: { select:{ name:true } } },
  })
   .then((post) => {

     if (post) {
       res.status(200).json(post);
     } else {
       res.sendStatus(400).send('Post not Available');
     }

   })
.catch((err) => {
  res.status(500).json(err);
});

};

export const updatePost = async (req: Request, res: Response) => {

  await prisma.post.update({
    where: { id: 1 },
    data: { published: true },

  }).then((updated) => { res.sendStatus(200).send('Post has been updated'); })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
};

export const deletePost =  async (req: Request, res: Response) => {
  

}
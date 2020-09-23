import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export const getUser = async (req:Request, res:Response) => {

  await prisma.user.findMany()
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.sendStatus(400).send('Users not Available');
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });

};
export const postUser = async (req: Request, res: Response) => {

  await prisma.user.create({
    data: {
      ...req.body,
    },
  });
};

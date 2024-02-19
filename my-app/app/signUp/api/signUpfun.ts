import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log('hello');
      const UserData = JSON.parse(req.body);
      const savedUser = await prisma.user.create({
        data: UserData
      });
      console.log(savedUser.name);
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}


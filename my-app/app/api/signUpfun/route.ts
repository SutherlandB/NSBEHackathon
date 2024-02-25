import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';

const prisma = new PrismaClient();

export async function signUpfunc(formData: FormData) {
  'use server'

  const UserData = {
    fullname: formData.get('fullname') as string,
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  } 



  const savedUser = await prisma.user.create({
    data: {
      userName: UserData.username,
      name: UserData.fullname,
      password: UserData.password,
    },
    
  });


  } 


import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import {auth} from "@clerk/nextjs";

const prisma = new PrismaClient();

export async function incomeFun(formData: FormData) {
  'use server'

  const IncomeData = {
    source: formData.get('source') as string,
    freq: formData.get('frequency') as string,
    amount: parseInt(formData.get('amount') as string),
  } 
  const user = auth().userId as string;



  const incomeU = await prisma.income.create({
    data: {
        userId: user,
        source: IncomeData.source,
        freq: IncomeData.freq,
        amount: IncomeData.amount
    },
   
    
  });



  } 


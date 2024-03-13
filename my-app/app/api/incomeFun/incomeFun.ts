'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import {auth} from "@clerk/nextjs";
import * as z from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

const formSchema = z.object({
  id: z.coerce.number(),
  frequency: z.string(),
  source: z.string(),
  amount: z.coerce.number()

});

export async function incomeFun(formData: z.infer<typeof formSchema>) {
 

  const IncomeData = {
    source: formData.source as string,
    freq: formData.frequency as string,
    amount: formData.amount as number,
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
  revalidatePath('../../dashboard');



  } 

  export async function incomeEdit(formData: z.infer<typeof formSchema>) {
 

    const IncomeData = {
      source: formData.source as string,
      freq: formData.frequency as string,
      amount: formData.amount as number,
    } 
    const user = auth().userId as string;
    
  
  
    const incomeU = await prisma.income.update({
      where: {
        id: formData.id as number,
      },
      data: {
        source: IncomeData.source,
        freq: IncomeData.freq,
        amount: IncomeData.amount
      },
  
  
    } 
    );
    redirect('../../dashboard')
  }

  export async function incomeDelete(id: number) {

    await prisma.income.delete({ 
        where: { id, },
     });
     revalidatePath('../../dashboard');
}
  
  
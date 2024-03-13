'use server'
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import * as z from 'zod';
import {auth} from "@clerk/nextjs";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



const formSchema = z.object({
    id: z.coerce.number(),
    frequency: z.string(),
    source: z.string(),
    amount: z.coerce.number()
  
  });


const prisma = new PrismaClient();

export async function expenseFun(formData: z.infer<typeof formSchema>){
    
    const user = auth().userId as string;
    
    const ExpenseData = {
        source: formData.source as string,
        freq: formData.frequency as string,
        amount: formData.amount,
    } 
    

    const expense = await prisma.expense.create({
        data: {
            userId: user,
            source: ExpenseData.source,
            freq: ExpenseData.freq,
            amount: ExpenseData.amount,
        },

    });
    revalidatePath('../../dashboard');
}

export async function expenseEdit(formData: z.infer<typeof formSchema>) {
 

    const ExpenseData = {
      source: formData.source as string,
      freq: formData.frequency as string,
      amount: formData.amount as number,
    } 
    const user = auth().userId as string;

    const expenseE = await prisma.expense.update({
      where: {
        id: formData.id as number,
      },
      data: {
        source: ExpenseData.source,
        freq: ExpenseData.freq,
        amount: ExpenseData.amount
      },
  
  
    } 
    );
    redirect('../../dashboard')
  }

  export async function expenseDelete(id: number) {
    await prisma.expense.delete({ 
        where: { id, },
     });
     revalidatePath('../../dashboard');
}
  
  
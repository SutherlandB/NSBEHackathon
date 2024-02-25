import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Head from 'next/head';
import {auth} from "@clerk/nextjs";

export async function expenseFun(formData: FormData){
    'use server'
    const user = auth().userId as string;
    const prisma = new PrismaClient();
    const ExpenseData = {
        source: formData.get('source2') as string,
        freq: formData.get('frequency2') as string,
        amount: parseInt(formData.get('amount2') as string),
    } 
    console.log(ExpenseData);

    const expense = await prisma.expense.create({
        data: {
            userId: user,
            source: ExpenseData.source,
            freq: ExpenseData.freq,
            amount: ExpenseData.amount,
        },

    });
}
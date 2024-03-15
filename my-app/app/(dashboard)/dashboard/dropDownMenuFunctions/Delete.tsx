'use server'
import { PrismaClient } from '@prisma/client';

export async function deleteIncome(id: number) {
    const prisma = new PrismaClient();
    await prisma.income.delete({ 
        where: { id, },
     });
}
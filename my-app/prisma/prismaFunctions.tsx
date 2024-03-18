import { PrismaClient } from "@prisma/client";

const prismaC = new PrismaClient();
    
//income functions
export async function getAllIncomeRows(userId: string){
    return await prismaC.income.findMany({
        where: {userId: userId}
      }); 
}

export async function getYearlyIncomeRows(userId: string){
    return await prismaC.income.findMany({
        where: {userId: userId,
                freq: "Yearly"}
      }); 
}

export async function getMonthlyIncomeRows(userId: string){
    return await prismaC.income.findMany({
        where: {userId: userId,
                freq: "Monthly"}
      }); 
}

export async function getWeeklyIncomeRows(userId: string){
    return await prismaC.income.findMany({
        where: {userId: userId,
                freq: "Weekly"}
      }); 
}

export async function getDailyIncomeRows(userId: string){
    return await prismaC.income.findMany({
        where: {userId: userId,
                freq: "Daily"}
      }); 
}

export async function sumIncomeRows(userId: string, frequency: string){
    return await prismaC.income.aggregate({
        _sum: {
          amount: true,
        },
        where: {
            userId: userId,
            freq: frequency,
        }
      })
}

//expense functions 
export async function getAllExpenseRows(userId: string){
    return await prismaC.expense.findMany({
        where: {userId: userId}
      }); 
}

export async function getYearlyExpenseRows(userId: string){
    return await prismaC.expense.findMany({
        where: {userId: userId,
                freq: "Yearly"}
      }); 
}

export async function getMonthlyExpenseRows(userId: string){
    return await prismaC.expense.findMany({
        where: {userId: userId,
                freq: "Monthly"}
      }); 
}

export async function getWeeklyExpenseRows(userId: string){
    return await prismaC.expense.findMany({
        where: {userId: userId,
                freq: "Weekly"}
      }); 
}

export async function getDailyExpenseRows(userId: string){
    return await prismaC.expense.findMany({
        where: {userId: userId,
                freq: "Daily"}
      }); 
}

export async function sumExpenseRows(userId: string, frequency: string){
    return await prismaC.expense.aggregate({
        _sum: {
          amount: true,
        },
        where: {
        userId: userId,
          freq: frequency,
        }
      })
}


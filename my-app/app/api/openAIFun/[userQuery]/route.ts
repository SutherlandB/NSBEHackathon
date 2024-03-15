import openai from '../../../utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from 'next/server';
import * as p from '../../../../prisma/prismaFunctions'
import {auth, currentUser} from "@clerk/nextjs";

const userId = auth().userId as string;

type Data = {
    name:string
};


export async function GET(
    req: Request, 
    context: any
){
    const sumDailyIncome = p.sumIncomeRows(userId, "Daily");
    const sumWeeklyIncome = p.sumIncomeRows(userId,"Weekly");
    const sumMonthlyIncome = p.sumIncomeRows(userId,"Monthly");
    const sumYearlyIncome = p.sumIncomeRows(userId,"Yearly");
    
    const sumDailyExpense = p.sumExpenseRows(userId,"Daily");
    const sumWeeklyExpense = p.sumExpenseRows(userId,"Weekly");
    const sumMonthlyExpense = p.sumExpenseRows(userId,"Monthly");
    const sumYearlyExpense = p.sumExpenseRows(userId,"Yearly");
    const { params } = context;
    console.log(sumDailyIncome);
    

    // const chatCompletion = await openai.chat.completions.create({
    //         model: 'gpt-3.5-turbo',
    //         messages: [{ role: 'user', content: params.userQuery }],
            
    //       });
    //       const responseText = chatCompletion.choices[0].message;
    //       console.log(responseText);
    //       return NextResponse.json({
    //         message: responseText,
    //       });

    return NextResponse.json({
        Message:"LMAO",
    })
    }


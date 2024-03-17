import openai from '../../../utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import {NextRequest, NextResponse} from 'next/server';
import * as p from '../../../../prisma/prismaFunctions'
import {auth, currentUser} from "@clerk/nextjs";


type Data = {
    name:string
};


export async function GET(
    req: NextRequest, 
    context: any
){
    const { params } = context;
    const lst = (params.userQuery as string).split("-");
    const query = lst[0];
    const userId = lst[1];

    //income aggregations
    const sumDailyIncome = await p.sumIncomeRows(userId, "Daily");
    const sumWeeklyIncome = await p.sumIncomeRows(userId,"Weekly");
    const sumMonthlyIncome = await p.sumIncomeRows(userId,"Monthly");
    const sumYearlyIncome = await p.sumIncomeRows(userId,"Yearly");
    
    //expense aggregations
    const sumDailyExpense = await p.sumExpenseRows(userId,"Daily");
    const sumWeeklyExpense = await p.sumExpenseRows(userId,"Weekly");
    const sumMonthlyExpense = await p.sumExpenseRows(userId,"Monthly");
    const sumYearlyExpense = await p.sumExpenseRows(userId,"Yearly");

     const finalQuery = "I have income data that is separated by frequency. The categories are yearly, monthly, weekly, and daily income. These categories have a sum that is separate from the other categories." +
     "My yearly income is $" + (sumYearlyIncome._sum.amount ? sumYearlyIncome._sum.amount?.toString() : 0 ) + " and I earn an extra $" + (sumMonthlyIncome._sum.amount  ? sumMonthlyIncome._sum.amount : 0) + 
    " that I earn on a monthly basis and I earn an extra $" + (sumWeeklyIncome._sum.amount ? sumWeeklyIncome._sum.amount : 0) + " on a weekly basis and I earn an extra $" + (sumDailyIncome._sum.amount  ? sumDailyIncome._sum.amount : 0) + " on a daily basis." + 
    " My yearly expenses cost $" + (sumYearlyExpense._sum.amount ? sumYearlyExpense._sum.amount : 0) + " and my extra monthly expenses cost $" + (sumMonthlyExpense._sum.amount  ?  sumMonthlyExpense._sum.amount : 0) + 
    " and my extra weekly expenses cost $" + (sumWeeklyExpense._sum.amount  ? sumWeeklyExpense._sum.amount : 0) + " and my extra daily expenses cost $" + (sumDailyExpense._sum.amount  ? sumDailyExpense._sum.amount : 0) + "." + 
    " On a scale of 1 to 10, " + query + " You must give a score. Format your response in a JSON object with the keys score, condensedExplanation, deeperExplanation In the condensedExplanation key, mention the quantity of how much money would remain.";

    // const chatCompletion = await openai.chat.completions.create({
    //         model: 'gpt-3.5-turbo',
    //         messages: [{ role: 'user', content: finalQuery }],
            
    //       });
    // const responseText = await chatCompletion.choices[0].message;

    // const content = responseText.content;
    // const newContent = JSON.stringify(content);
    // const gptContent = JSON.parse(JSON.parse(newContent));
    
    
    return NextResponse.json({
        //gptContent
        gptContent: {
            score: 4,
            deeperExplanation: "Based on the income and expense data provided, purchasing a car that costs $19 would have minimal impact on your overall financial health. With a yearly income of $180,000 and yearly expenses of $6,000, you have a significant amount of surplus income. Even after accounting for monthly, weekly, and daily expenses, you still have a large amount of disposable income available. Therefore, buying a car that costs $19 would not have a significant impact on your financial stability, and it would be a reasonable purchase."
        }
    
    });
}

    // return NextResponse.json({
    //     Message: finalQuery,
    // })
    // }


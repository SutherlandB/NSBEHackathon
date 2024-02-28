import openai from '../../../utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from 'next/server';

type Data = {
    name:string
};


export async function GET(
    req: Request, 
    context: any
){

    const { params } = context;
    console.log(params.userQuery);
    

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
      "Message":"LMAO",
    })
    }


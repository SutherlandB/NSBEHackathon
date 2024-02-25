import openai from '../../../utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from 'next/server';

'use server'

type Data = {
    name:string
};


export default async function GET(
    req: Request, 
    context: any
){

    const { params } = context;
    
    /*
    const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: 'yuh' }],
            
          });
          const responseText = chatCompletion.choices[0].message;*/
          return NextResponse.json({
            hello: 'world',
          });

    }


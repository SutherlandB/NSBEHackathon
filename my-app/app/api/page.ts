import openai from '../utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name:string
};

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<any> 
){

    const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: 'Say this is a test' }],
            
          });
          const responseText = chatCompletion.choices[0].message;
          res.status(200).json({ responseText });
        }
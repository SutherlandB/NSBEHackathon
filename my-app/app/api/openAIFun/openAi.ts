'use server'
import { useSearchParams } from 'next/navigation';
import * as z from 'zod';
import { outputConvo } from '@/app/(dashboard)/dashboard/outputConvo/outputConvo';

const formSchema = z.object({
    item: z.string(),
    amount: z.coerce.number(),

  });

export async function openAIfunc(
    formData: z.infer<typeof formSchema>,
    userId: string
    ){
        var userQuery = 'Should I buy a ' + (formData.item as string) + ' that costs $' + (formData.amount.toString()) + '%3F-' + userId;
        
        const response = await fetch(`http://localhost:3000/api/openAIFun/${userQuery}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok){
            const data = await response.json();
            
            return data;
        }
        else{
            console.log("ERROR");
    
        }
        // return "delete this line";
        
    }

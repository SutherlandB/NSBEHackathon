'use client'
import { FormEdit } from "../FormInput/formInput"; 
import { useRouter, useSearchParams } from "next/navigation";
export default function EditPage(){
    // const router = useRouter();
    // const rawData = router.query.data;
    // const dataObject = JSON.parse(decodeURIComponent(rawData as string));
    const searchParams = useSearchParams();
    const data = JSON.parse(searchParams.get('data') as string)
    
    return (
        <body>
            <FormEdit id = {data.id} frequency = {data.frequency} source = {data.source} amount = {data.amount} />
        </body>
    );
}
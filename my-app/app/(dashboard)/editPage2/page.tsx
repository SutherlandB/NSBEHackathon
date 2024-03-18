'use client'
import { FormEdit2 } from "../FormInput/formInput"; 
import { useRouter, useSearchParams } from "next/navigation";
export default function EditPage2(){
    // const router = useRouter();
    // const rawData = router.query.data;
    // const dataObject = JSON.parse(decodeURIComponent(rawData as string));
    const searchParams = useSearchParams();
    const data = JSON.parse(searchParams.get('data') as string)
    console.log(data.id);
    
    return (
        <body>
            <FormEdit2 id = {data.id} frequency = {data.frequency} source = {data.source} amount = {data.amount} />
        </body>
    );
}
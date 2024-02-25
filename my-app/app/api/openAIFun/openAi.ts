'use server'

export async function openAIfunc(
    formData: FormData
    ){
        const userQuery = 'Should I buy a '+ (formData.get('item') as string) + (formData.get('amnt') as string) + '?';

        const response = await fetch("http://localhost:3000/api" , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (response.ok){
            console.log("OKAY");
        }
        else{
            console.log("ERROR");
            
        }


    }

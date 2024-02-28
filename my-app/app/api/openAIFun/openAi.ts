'use server'

export async function openAIfunc(
    formData: FormData
    ){
        var userQuery = 'Should I buy a '+ (formData.get('item') as string) + " that costs $" + (formData.get('amnt') as string) + '?';

        const response = await fetch(`http://localhost:3000/api/openAIFun/${userQuery}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (response.ok){
            console.log(response.json());
        }
        else{
            console.log("ERROR");
    
        }

    }

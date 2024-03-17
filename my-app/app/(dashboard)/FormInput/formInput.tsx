'use client'
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form,FormField, FormItem,FormMessage, FormLabel, FormControl} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import {incomeFun, incomeEdit} from "../../api/incomeFun/incomeFun";
import { expenseEdit, expenseFun } from '@/app/api/expensesFun/expenseFun';
import { Button } from '@/components/ui/button';
import Link from "next/link"
import { openAIfunc } from '@/app/api/openAIFun/openAi';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';
import styles from '../dashboard/dashboard.module.css';
import Dropdown from '@/app/components/Dropdown';

//import { outputConvo } from '../dashboard/outputConvo/outputConvo';

// export async function outputConvo(data: any){
//   console.log(data);

//   return (

//       <div id = "outputConvo">
//         <div id = "score">
//           Score: {data.score}
//           </div>
//         <div id = "condensedExp">
//           Short Explanation: {data.condensedExplanation}
//         </div>
//         <div id = "deeperExp"> 
//         Deep Explanation: {data.deepExplanation}
//         </div>
//       </div>
//   )
// }


export function FormIncome(){
  const [newData, setNewData] = useState("Yearly");

    const formSchema = z.object({
        id: z.coerce.number(),
        frequency: z.string(),
        source: z.string(),
        amount: z.coerce.number()

      });
    const form = useForm<z.infer<typeof formSchema>>({
        //pass configuration zod resolver
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: 1,
            frequency:  newData,
            source: "",
            amount: 0,
        }
      });
    const handleSubmit = (values: z.infer<typeof formSchema>) => {incomeFun(values)};
    
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className = "rounded-full">
          
        <FormField control = {form.control} name = "frequency" render = {({field}) => {
            return <FormItem>
              <FormLabel>Frequency </FormLabel>
              <Dropdown freq = {newData} func = {setNewData} />
              <FormControl>
                <Input className = "invisible h-0 rounded-full"  placeholder = {newData} type = "text" {...field} value = {newData} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
        
          <FormField control = {form.control} name = "source" render = {({field}) => {
            return <FormItem>
              <FormLabel>Source </FormLabel>
              <FormControl>
                <Input className = "rounded-full" placeholder = "Source (e.g. job income, stocks, tax return, etc...)" type = "text" {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          <FormField control = {form.control} name = "amount" render = {({field}) => {
            return <FormItem>
              <FormLabel>Amount </FormLabel>
              <FormControl>
                <Input className = "rounded-full" placeholder = "Amount" type="number"  {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          <br></br>
          <Button type = "submit" className = "w-full">Add to Income Table</Button>
        </form>

      </Form>
    )
}

export function FormExpense(){
  const [newData, setNewData] = useState("Yearly");
    const formSchema = z.object({
        id: z.coerce.number(),
        frequency: z.string(),
        source: z.string(),
        amount: z.coerce.number()

      });
    const form = useForm<z.infer<typeof formSchema>>({
        //pass configuration zod resolver
        resolver: zodResolver(formSchema),
        defaultValues: {
          id: 1,
          frequency: "",
          source: "",
          amount: 0,
        }
      });
    const handleSubmit = (values: z.infer<typeof formSchema>) => {expenseFun(values)};
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} >
        <FormField control = {form.control} name = "frequency" render = {({field}) => {
            return <FormItem>
              <FormLabel>Frequency </FormLabel>
              <Dropdown freq = {newData} func = {setNewData} />
              <FormControl>
                <Input className = "invisible h-0 rounded-full" placeholder = "Frequency (Yearly, Monthly, Weekly, Daily...)" type = "text" {...field} value = {newData}/> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
        
          <FormField control = {form.control} name = "source" render = {({field}) => {
            return <FormItem>
              <FormLabel>Source </FormLabel>
              <FormControl>
                <Input className = "rounded-full" placeholder = "Source (e.g. Taxes, Netflix, Groceries...)" type = "text" {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          <FormField control = {form.control} name = "amount" render = {({field}) => {
            return <FormItem>
              <FormLabel>Amount </FormLabel>
              <FormControl>
                <Input className = "rounded-full" placeholder = "Amount" type="number"  {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          <br></br>
          <Button type = "submit" className = "w-full">Add to Expenses Table</Button>
        </form>

      </Form>
    )
}

export function FormEdit({id, frequency, source, amount} : {id:number, frequency:string, source: string, amount: number}){
    const formSchema = z.object({
        id: z.coerce.number(),
        frequency: z.string(),
        source: z.string(),
        amount: z.coerce.number()

      });
    const form = useForm<z.infer<typeof formSchema>>({
        //pass configuration zod resolver
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
            frequency: frequency,
            source: source,
            amount: amount
        }
      });
    const handleSubmit = (values: z.infer<typeof formSchema>) => {incomeEdit(values)};
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField control = {form.control} name = "frequency" render = {({field}) => {
            return <FormItem>
              <FormLabel>Frequency </FormLabel>
              <FormControl>
                <Input placeholder = "Frequency (Yearly, Monthly, Weekly, Daily...)" type = "text" {...field} /> 
              </FormControl>    
              <FormMessage /> 
            </FormItem>
          }}/>
        
          <FormField control = {form.control} name = "source" render = {({field}) => {
            return <FormItem>
              <FormLabel>Source </FormLabel>
              <FormControl>
                <Input placeholder = "Source (e.g. job income, stocks, tax return, etc...)" type = "text" {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>

          <FormField control = {form.control} name = "amount" render = {({field}) => {
            return <FormItem>
              <FormLabel>Amount </FormLabel>
              <FormControl>
                <Input placeholder = "Amount" type="number"  {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          
          <Button type = "submit" className = "w-full">Submit</Button>
          <Button asChild>
            <Link href="../dashboard">Cancel</Link>
        </Button>
        </form>
      </Form>
    )
}



export function FormEdit2({id, frequency, source, amount} : {id:number, frequency:string, source: string, amount: number}){
    const formSchema = z.object({
        id: z.coerce.number(),
        frequency: z.string(),
        source: z.string(),
        amount: z.coerce.number()

      });
    const form = useForm<z.infer<typeof formSchema>>({
        //pass configuration zod resolver
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
            frequency: frequency,
            source: source,
            amount: amount
        }
      });
    const handleSubmit = (values: z.infer<typeof formSchema>) => {expenseEdit(values)};
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField control = {form.control} name = "frequency" render = {({field}) => {
            return <FormItem>
              <FormLabel>Frequency </FormLabel>
              <FormControl>
                <Input placeholder = "Frequency (Yearly, Monthly, Weekly, Daily...)" type = "text" {...field} /> 
              </FormControl>    
              <FormMessage /> 
            </FormItem>
          }}/>
        
          <FormField control = {form.control} name = "source" render = {({field}) => {
            return <FormItem>
              <FormLabel>Source </FormLabel>
              <FormControl>
                <Input placeholder = "Source (e.g. job income, stocks, tax return, etc...)" type = "text" {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>

          <FormField control = {form.control} name = "amount" render = {({field}) => {
            return <FormItem>
              <FormLabel>Amount </FormLabel>
              <FormControl>
                <Input placeholder = "Amount" type="number"  {...field} /> 
              </FormControl>
              <FormMessage /> 
            </FormItem>
          }}/>
          
          <Button type = "submit" className = "w-full">Submit</Button>
          <Button asChild>
            <Link href="../dashboard">Cancel</Link>
        </Button>
        </form>
      </Form>
    )
}

export function FormConveration({userId}: {userId:string}){
    const [data, setData] = useState<any>();
    
    const formSchema = z.object({
        item: z.string(),
        amount: z.coerce.number(),

      });
    const form = useForm<z.infer<typeof formSchema>>({
        //pass configuration zod resolver
        resolver: zodResolver(formSchema),
        defaultValues: {
            item: "",
            amount: 0,
        }
      });
    
    const handleSubmit = (values: z.infer<typeof formSchema>) => {  openAIfunc(values, userId).then((response) => setData( response.gptContent ));};  
    return (
        
        <Form {...form} >
            
        <form className=" relative flex text-3xl space-x-2" onSubmit={form.handleSubmit(handleSubmit)} >
        <span>Should I buy...</span>
        <FormField control = {form.control} name = "item" render = {({field}) => {
            return <FormItem>
              <FormControl>
                <Input className = " w-25 rounded-full text-black" placeholder = "...some item" type = "text" {...field} /> 
              </FormControl>    
              <FormMessage /> 
            </FormItem>
          }}/>  <span>that costs  </span>
          <FormField control = {form.control} name = "amount" render = {({field}) => {
            return <FormItem>
              <FormControl>
              <Input className = "w-20 border-5 rounded-full text-black " type = "number" placeholder = "0" {...field} />
              </FormControl>    
              <FormMessage /> 
            </FormItem>
          }}/>
         <span>dollars</span>
          <Button type = "submit" className = "bg-[#71AAE9] w-25 hover:bg-sky-700">Submit</Button>
        </form>
      
        { data && 
        <div id = "outputConvo" className = "relative h-auto text-white overflow-y-auto">
          <br></br>
          <h1 className = {styles.outputText}><span className = "text-md">On a scale of 1 - 10 (10 being highly certain), your score is: <span className = "font-bold text-2xl">{data.score}</span></span></h1>
        
        {/* <div id = "condensedExp">
          Short Explanation: {data.condensedExplanation}
        </div> */}
        
        <div id = "deeperExp" className = "relative w-1/2 h-auto overflow-y-auto"> 
          <h1 className = {styles.outputText}>Explanation: {data.deeperExplanation}</h1>
        </div>
      </div>    
      }   
      </Form>
        
    )
}
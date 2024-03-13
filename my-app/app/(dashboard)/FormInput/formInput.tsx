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



export function FormIncome(){
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
    const handleSubmit = (values: z.infer<typeof formSchema>) => {incomeFun(values)};
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
        </form>

      </Form>
    )
}

export function FormExpense(){
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
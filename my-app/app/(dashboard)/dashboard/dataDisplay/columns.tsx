"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { incomeDelete } from "@/app/api/incomeFun/incomeFun";

 
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Dashboard from "../page"
import { revalidatePath } from "next/cache";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Income = {
  id: number
  source: string
  freq: string
  amount: number
}


 
export const columns: ColumnDef<Income>[] = [
  {
    accessorKey: "freq",
    header: "Frequency",
  },
  {
    accessorKey: "source",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Source
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
        id: "actions",
        cell: ({ row }) => {
            //entire row = row.original
          const rowData = row.original
          const router = useRouter();
          const editIncome = () => {
            const IncomeData = {
              id: rowData.id,
              frequency: rowData.freq,
              source: rowData.source,
              amount: rowData.amount
            }
            const dataObject = JSON.stringify(IncomeData);
            router.push(`../editPage?data=${encodeURIComponent(dataObject)}`);
          }
     
          return (
            <AlertDialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick = {editIncome}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <AlertDialogTrigger asChild>
                <DropdownMenuItem >Delete</DropdownMenuItem>
                </AlertDialogTrigger>
                
              </DropdownMenuContent>
            </DropdownMenu>
                <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone!
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick = {() => {incomeDelete(rowData.id); }}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
          )
        }
        
    }
]
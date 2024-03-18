import React from 'react';
import {incomeFun} from "../../api/incomeFun/incomeFun";
import {expenseFun} from "../../api/expensesFun/expenseFun";
import {auth} from "@clerk/nextjs";
import { PrismaClient } from '@prisma/client';
import {openAIfunc} from '../../api/openAIFun/openAi'


export default async function Conversation(){
    return (
        <body>
            <main>
                <form action = {openAIfunc} >
                    <input type = 'text' name = 'item' placeholder = "What do you want to buy?"></input>
                    <input type = 'number' name = 'amnt' placeholder = "How much is it?"></input>
                    <button type = 'submit'>Enter</button>
                </form>
            </main>
        </body>
    )
}
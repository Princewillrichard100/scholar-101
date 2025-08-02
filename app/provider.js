"use client"
import { USER_TABLE } from '@/config/schema';
import React, { useEffect } from 'react';
import {db} from "@/config/db";
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import axios from 'axios';


export default function Provider({children}) {

const {user}=useUser();
useEffect(()=>{
user&&CheckIsNewUser();
},[user])

const CheckIsNewUser=async ()=>{

//  const result=await db.select().from(USER_TABLE)
//  .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))

//  console.log(result);
//  if (result?.length==0)
//  {
//     const userResp =await db.insert(USER_TABLE).values({
//         name:user?.fullName,
//     email:user?.primaryEmailAddress?.emailAddress

 
// }).returning({id:USER_TABLE.id})
//     console.log(userResp);
//  }
console.log("user before axios:", user);

const resp=await axios.post("/api/create-user",{user:user});
console.log(resp.data);

}
    return (
        <div>
         {children}
        </div>
    )
}



import {db} from "@/config/db";
import { STUDY_MATERIAL_TABLE} from "@/config/schema";
import { NextResponse } from "next/server";
import {eq} from "drizzle-orm";

export async function POST(req){
     const{createdBy}=await req.json();

        const res = await db.select().from(STUDY_MATERIAL_TABLE)
        .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy));
        return NextResponse.json({result: res});

}
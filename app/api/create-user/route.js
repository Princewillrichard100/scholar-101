import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client";


export async function POST(req) {
  const { user} = await req.json(); // make sure both are sent in the body

  

  const result = await inngest.send({
    name: "user.create",
    data: {
      user: user, // ✅ Now user is defined
    },
  });

  return NextResponse.json({ result });
}

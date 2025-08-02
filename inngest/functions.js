import { inngest } from "./client";
import { db } from "@/config/db";
import { USER_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello,World!"};
  },
);

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {

  const{user}=event.data;
    const result = await step.run("Check user and create new if not in db", async () => {
      // Check if user exists in the database
    
     const result=await db.select().from(USER_TABLE)
     .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))
    
     console.log(result);
     if (result?.length==0)
     {
      console.log("🚀 Incoming user:", user);

        const userResp =await db.insert(USER_TABLE).values({
            name:user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress
    
     
    }).returning({id:USER_TABLE.id})
        
        return userResp;
     }
     return result;
    });
    return"Success";
  },

  // Send email notification
  // send email notification after three days
);
import { NextResponse } from "next/server";
import courseOutline from "@/config/AiModel"
import { db } from "@/config/db";
import { STUDY_MATERIAL_TABLE } from "@/config/schema";

export async function POST(req) {
    const {courseId,topic,difficultyLevel,courseType,createdBy} = await req.json();
   const PROMPT = `
You are a Scholar 101 AI course-outline generator. Produce ONE JSON object ONLY — no markdown, no backticks, no commentary — that strictly follows this schema and naming:

{
  "title": string,                       // concise course title
  "summary": string,                     // 2–4 sentence overview
  "difficultyLevel": "Easy" | "Medium" | "Hard",
  "chapters with Chapter numbering system": [
    {
      "title": string,                   // chapter title
      "summary": string,                 // 1–2 sentence chapter summary
      "topics": [ string, ... ]          // 4–8 bullet-style topic names
    }
  ],
  "metadata": {
    "topic": string,                     // echo the requested topic
    "courseType": string,                // echo the requested courseType
    "estimatedHours": number,            // integer 4–40
    "prerequisites": [ string, ... ],    // 0–5 items
    "version": "1.0"
  }
}

Requirements:
- Output must be VALID JSON (UTF-8, double-quoted keys/strings, no trailing commas).
- Do NOT include markdown/code fences/backticks.
- Provide 5–8 chapters. Each chapter must have 4–8 topics.
- Keep titles <= 80 chars; summaries <= 400 chars.
- Ensure fields exactly match the schema keys above (e.g., "title", "summary", "chapters", etc.).

Now generate for:
topic = "${topic}"
courseType = "${courseType}"
difficultyLevel = "${difficultyLevel}"
`.trim();


const aiResp=await courseOutline.sendMessage(PROMPT)
const rawResponse = aiResp.response.text();

// Remove ```json at start and ``` at end, plus any surrounding whitespace
const cleanedResponse = rawResponse
  .replace(/^```json\s*/, '')  // remove opening ```json
  .replace(/```$/, '')          // remove closing ```
  .trim();

const aiResult = JSON.parse(cleanedResponse);



const dbResult=await db.insert(STUDY_MATERIAL_TABLE).values({
    courseID: courseId,
    topic: topic,
    courseType: courseType,
    createdBy: createdBy,
    courseLayout: aiResult,
    // difficultyLevel: aiResult.difficultyLevel || "Easy",
}).returning({resp:STUDY_MATERIAL_TABLE})
console.log(dbResult);

    return NextResponse.json({result: dbResult[0]});
}
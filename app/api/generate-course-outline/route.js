import { NextResponse } from "next/server";
import courseOutline from "@/config/AiModel"
import { db } from "@/config/db";
import { STUDY_MATERIAL_TABLE } from "@/config/schema";

export async function POST(req) {
    const {courseId,topic,difficultyLevel,courseType,createdBy} = await req.json();
    const PROMPT = `Generate a study material for ${topic} for ${courseType} at difficulty level ${difficultyLevel}. Output ONLY valid JSON with a summary of courses, list of chapters with summaries, and topics in each chapter.All in JSON format.`;

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
}).returning({STUDY_MATERIAL_TABLE})
console.log(dbResult);

    return NextResponse.json({result: dbResult[0]});
}
import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
	apiKey: process.env["OPENAI_API_KEY"],
});

export async function POST(request) {
	const prompt = await request.json();
	const response = await client.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: prompt }],
	});

	return NextResponse.json({ message: response.choices[0].message.content }, { status: 200 });
}

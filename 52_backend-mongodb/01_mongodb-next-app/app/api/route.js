import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("fish-shop-database");
		const products = await db.collection("products").find({}).toArray();

		return NextResponse.json(products, { status: 200 });
	} catch (e) {
		console.error(e);
	}
}

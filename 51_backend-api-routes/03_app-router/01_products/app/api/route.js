import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/productServices";

export async function GET() {
	return NextResponse.json(getAllProducts(), { status: 200 });
}

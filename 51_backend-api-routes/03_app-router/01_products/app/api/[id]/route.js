import { NextResponse } from "next/server";
import { getProductById } from "@/lib/productServices";

export async function GET(_, { params }) {
	const id = (await params).id;

	if (!getProductById(id)) return NextResponse.json({ status: "Product not found" }, { status: 404 });

	return NextResponse.json(getProductById(id), { status: 200 });
}

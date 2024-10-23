import Chance from "chance";
import { NextResponse } from "next/server";

export async function GET() {
	const chance = new Chance();
	const character = {
		name: chance.name(),
		twitter: chance.twitter(),
		geo: chance.geohash(),
	};

	return NextResponse.json(character, { status: 200 });
}

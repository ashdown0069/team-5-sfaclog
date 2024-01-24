import { NextRequest, NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

export async function GET(request: NextRequest) {
  try {
    const pb = new PocketBase(`${process.env.POCKETBASE_URL}`);

    return NextResponse.json([], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An unexpected error occurred',
      },
      { status: 500 },
    );
  }
}

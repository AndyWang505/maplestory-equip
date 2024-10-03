import { NextResponse } from 'next/server';

export async function GET() {
  const region = 'TWMS';
  const version = 250;
  const API_URL = `https://maplestory.io/api/${region}/${version}/item?count=20`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    // response for client
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: 'Error fetching data', error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
}
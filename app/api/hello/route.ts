import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    const name = url.searchParams.get("name");
    return new NextResponse('Hello, From : ' + name);
  }
  else {
    return new NextResponse('Please send your name');
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: 'All well here',
      RequestType: "POST"
    });
  } else {
    return new NextResponse('Please inculde your name in the post request');
  }
}
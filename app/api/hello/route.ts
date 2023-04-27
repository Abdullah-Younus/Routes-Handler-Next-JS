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

export async function PUT(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: "Name iS Updated",
      RequestType: "PUT"
    });
  } else {
    return new NextResponse('Please include your name in the PUT request');
  }
}

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    const responseData = {
      To: "Sameer",
      Message: "I have deleted the greetings",
      RequestType: "DELETE"
    };
    return new NextResponse(JSON.stringify(responseData));
  } else {
    return new NextResponse('Please include your name in the DELETE request');
  }
}
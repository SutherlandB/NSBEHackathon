import { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from 'next/server';
// export async function GET(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Get the name from the query string
//   const name = req.query.name;

//   // Return a JSON response with the name
//   console.log(name);
//   res.status(200).json({ name });}

export async function GET(request: Request) {
    return NextResponse.json({ message: "Hello World" });
  }

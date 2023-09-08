import { getAuthSession } from '@/lib/auth'
import { NextResponse } from "next/server";
import {  OpenAI } from "openai";
import { db } from '@/lib/db'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});


export async function POST(
  req: Request
) {
  try {

    const session = await getAuthSession()

    const body = await req.json();
    const { prompt } = body;

    const amount = "1", resolution = "512x512"


    if (!session!.user.id) {
      return new NextResponse("로그인 해주세요", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API 설정 Error", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt값 Error", { status: 400 });
    }

 
    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
      response_format:'b64_json'
    //생성된 이미지를 Url로 받아오면 시간이지나면 사라지기 때문에
    //base64 데이터로 받아서 이미지 서버(Cloudinary)에 저장하기.
    });


  const result = await cloudinary.uploader.upload("data:image/png;base64,"+ response.data[0].b64_json)


    await db.post.create({
      data: {
        content: result.url,
        authorId: session!.user.id,
      },
    })
    

    return NextResponse.json(result.url);
    
  } catch (error) {
    console.log('이미지 생성 Error', error);
    return new NextResponse("서버 Error", { status: 500 });
  }
};

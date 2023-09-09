"use client";

// import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { ReactNode, useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Cat } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader2 } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { Badge } from "./ui/badge";
import Link from 'next/link'
// redolution과 amount를 default 값으로 진행할 예정이라
// form을 사용할 필요가 없어짐

// export const formSchema = z.object({
//   prompt: z.string().min(1, {
//     message: "Photo prompt is required"
//   }),
//   amount: z.string().min(1),
//   resolution: z.string().min(1),
// });



const Generator = () => {

  const [photos, setPhotos] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     prompt: "",
  //     amount: "1",
  //     resolution: "512x512"
  //   }
  // });


  const {mutate, isLoading}  = useMutation({
    mutationFn: async () => {
      setPhotos("");
      const response = await axios.post('/api/image', {prompt});
  
      const urls = response.data;
        return urls
    },

    onError: () => {
      return alert('에러 발생');
    },

    onSuccess: (urls) => {
  
      setPhotos(urls);

      return alert('귀여운 이미지 생성 완료😊');
    },
  })


  return ( 
    <div className="mt-10 flex flex-col justify-center items-center">
      <Link href="https://github.com/harpsealpup/cute-animal" className="mb-3" >
<Button>GITHUB 보러 가기</Button>
</Link>
<h1 className="mb-3">본 이미지 생성기는 Open-AI 사의 DALL-E API를 사용하였습니다</h1>
<h1 className="mb-3">무한 스크롤을 경험하실 수 있습니다</h1>

    <Card className="w-[365px] my-4">
      <CardHeader>
        <CardTitle className="mx-auto mb-4">AI CUTE ANIMAL MAKER</CardTitle>
        <CardDescription className="mx-auto">*로그인 하셔야 만드실 수 있어요*</CardDescription>
        <CardDescription className="mx-auto">동물을 선택하고 만들기 버튼을 누르세요😊</CardDescription>
        <CardDescription className="mx-auto mb-2">생성되는데 10초 정도 걸립니다</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">동물 선택</Label> 
              <Input id="name" placeholder={'아래의 동물을 선택해 주세요'} value={prompt} disabled></Input>
            </div>

<div className="flex justify-between flex-col items-center my-2">
            <div className='flex space-x-1 pointer-events-auto cursor-pointer'>
        <Badge onClick={() => setPrompt("A Extremely Cute Cat")} className="bg-[#ec4899] text-white">고양이😸</Badge>
      <Badge onClick={() => setPrompt("A Extremely Cute Panda")} className="bg-[#ec4899] text-white">판다🐼</Badge>
   
        </div>
        <div className='flex space-x-1 mt-3 pointer-events-auto cursor-pointer'>
        <Badge onClick={() => setPrompt("A Extremely Cute Puppy")} className="bg-[#ec4899] text-white">강아지🐶</Badge>
      <Badge onClick={() => setPrompt("A Extremely Cute Dolphin")} className="bg-[#ec4899] text-white">돌고래🐬</Badge>
      <Badge onClick={() => setPrompt("A Extremely Cute Pokemon")} className="bg-[#ec4899] text-white">포켓몬🐎</Badge>
        </div>

        </div>
           
          </div>
        </form>
      
      </CardContent>
      <hr/>
      <CardFooter className="flex justify-center items-center">
       {/* @ts-ignore */}
      <Button onClick={mutate} variant='outline' className="mt-5 ">
      <Cat className="mr-2 h-4 w-4" /> 귀여운 동물 만들기
    </Button>
    
      </CardFooter>
      
    </Card>




      <div className="px-4 lg:px-8">
 
        {isLoading && (
       <li className='flex justify-center'>
       <Loader2 className='w-6 h-6 text-zinc-500 animate-spin' />
     </li>
        )}
        {photos == "" && !isLoading && (
          <h2>아직 생성된 이미지가 없어요!</h2>
        )}
        
         {photos == "" ? ("") : ( 

          <Card className="w-[360px] my-4">
            <CardHeader className='flex flex-row justify-between'>
              <CardTitle >내가 만든 이미지</CardTitle>
              <CardDescription >방금</CardDescription>
            </CardHeader>
            <CardContent>
          
           
               <Image src={photos} width='512' height='512' alt='hi' />
            </CardContent>
            <hr/>
                <CardFooter className="flex justify-center items-center">
                  
                <Button variant='outline' className=" flex-1 mt-5 bg-[#1da1f2] text-white">
                <Cat className="mr-2 h-4 w-4" /> 공유하기
              </Button>
                </CardFooter>
          </Card>
      
     )}
          
        
      </div>


    </div>
   );
}
 
export default Generator;
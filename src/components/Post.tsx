'use client'

import { Post, User, Vote } from '@prisma/client'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Cat } from 'lucide-react'
  
  import dayjs from 'dayjs';
  import 'dayjs/locale/ko';
  import relativeTime from 'dayjs/plugin/relativeTime';

interface PostProps {
  post: Post & {
    author: User
  }
}

const Post = ({post}: PostProps) => {

  dayjs.locale('ko');
  dayjs.extend(relativeTime);
  
  return (
<div className="mt-10 flex flex-col justify-center items-center">


<Card className="w-[360px] my-4">
  <CardHeader className='flex flex-row justify-between'>
    <CardTitle >{post.author.name}</CardTitle>
    <CardDescription >{dayjs(post.createdAt).fromNow()}</CardDescription>
  </CardHeader>
  <CardContent>

     <Image src={`${post.content}`} width='512' height='512' alt='hi' />
  </CardContent>

</Card>
</div>
  )
}
export default Post
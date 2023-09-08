'use client'


import { ExtendedPost } from '@/types'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { FC, useEffect, useRef } from 'react'
import Post from './Post'

interface FeedProps {
  initialPosts: ExtendedPost[]
}

const INFINITE_SCROLL = 1

const Feed: FC<FeedProps> = ({ initialPosts }) => {
  const lastPostRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1, //범위를 포스트 하나 전체로
  })

  const { data, 
    fetchNextPage, // 다음 페이지 결과 값 리턴
    isFetchingNextPage // 로딩
   } = useInfiniteQuery(
    ['infinite-query'],
    async ({ pageParam = 1 }) => {

      const query =
        `/api/post?limit=${INFINITE_SCROLL}&page=${pageParam}`

      const { data } = await axios.get(query)
      return data as ExtendedPost[]
    },

    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: { pages: [initialPosts], pageParams: [1] },
    }
  )
  
  //마지막 포스트가 View에 들어오면 다음 post fetch하기
  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage() 
    }
  }, [entry, fetchNextPage])

  const posts = data?.pages.flatMap((page) => page) ?? initialPosts

  return (
    <ul className='flex flex-col col-span-2 space-y-6'>
      {posts.map((post, index) => {
       
        if (index === posts.length - 1) {
          // 마지막 게시글에 ref 추가
          return (
            <li key={post.id} ref={ref}>
              <Post
                post={post}
              />
            </li>
          )
        } else {
          return (
            <Post
              key={post.id}
              post={post}
    
            />
          )
        }
      })}

      {isFetchingNextPage && (
        <li className='flex justify-center'>
          <Loader2 className='w-6 h-6 text-zinc-500 animate-spin' />
        </li>
      )}
    </ul>
  )
}

export default Feed
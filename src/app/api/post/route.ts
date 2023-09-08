import { db } from '@/lib/db'
import { z } from 'zod'

export async function GET(req: Request) {
  const url = new URL(req.url)

  try {
    //유효성 검사와 동시에 값 가져오기
    const { limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
        
      })
      .parse({
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
      })


    const posts = await db.post.findMany({
      take: parseInt(limit), // 리턴 몇 개
      skip: (parseInt(page) - 1) * parseInt(limit), // 건너뛰기
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: true,
      },
    })

    return new Response(JSON.stringify(posts))
  } catch (error) {
    return new Response('서버 Error', { status: 500 })
  }
}
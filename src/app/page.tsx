import { db } from '@/lib/db'
import Feed from '../components/Feed'
import Generator from '@/components/Generator'


const Home = async () => {

  //InitailPosts 제공
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      author: true,
    },
    take: 1,
  })

  return (
  <div>
    <Generator/>
  <Feed initialPosts={posts} />
  </div>
  )
}

export default Home
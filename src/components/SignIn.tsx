
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>

        <h1 className='text-2xl font-semibold tracking-tight'>Cute Animal 로그인</h1>
        <p className='text-sm max-w-xs mx-auto'>
       로그인을 하셔야 이미지 생성이 가능합니다🤗
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        
        <Link
          href='/signup'
          className='hover:text-brand text-sm underline underline-offset-4'>
          회원가입하기
        </Link>
      </p>
    </div>
  )
}

export default SignIn
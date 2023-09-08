
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
   
        <h1 className='text-2xl font-semibold tracking-tight'>회원가입</h1>
        <p className='text-sm max-w-xs mx-auto'>
        로그인을 하셔야 이미지 생성이 가능합니다🤗
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        이미 가입하셨다면{' '}
        <Link
          href='/signin'
          className='hover:text-brand text-sm underline underline-offset-4'>
          로그인
        </Link>
      </p>
    </div>
  )
}

export default SignUp
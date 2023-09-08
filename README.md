This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 프로젝트의 목적

1. 백엔드 구분없이 NEXTJS만을 이용해 개발해 보고 싶었다.

2. React-Query의 무한 스크롤 기능을 사용해보고 싶었다.

3. 요즘 AI 증사나 사진이 유행하면서 나도 AI를 이용해서 연관된 재밌는 서비스를 만들어 보고 싶었다.

- next-auth로 간단한 소셜 로그인 구현
- DB mySql사용

## 핵심기능

-DALL-E가 URL을 리턴해주는데 시간이 지나면 사라진다.
그래서 base64타입으로 받아 먼저 이미지서버(Cloudinary)에 저장해준 뒤 리턴했다.

## 어려웠던 점

-DALL-E가 URL을 리턴해주는데 시간이 지나면 사라진다.
그래서 base64타입으로 받아 먼저 이미지서버(Cloudinary)에 저장해준 뒤 리턴했다.

## 추가할 기능

1. StackOverFlow나 Reddit같은 Vote기능을 추가해서 어떤 이미지가 가장 귀여운지 순위를 메기면 재밌을 것 같다.

2. API 호출 시 돈이 들기 때문에 계정 당 Limit 기능 추가하기

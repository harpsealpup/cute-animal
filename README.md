🤗 [Cute-Animal 사이트 바로가기](https://cute-animal.vercel.app) 🤗

-간단한 소셜 로그인을 진행한 뒤 동물을 선택하고 만들기 버튼을 누르면 AI 이미지가 생성됩니다!

## 프로젝트의 목적

1. 백엔드 구분 없이 Next.js만을 이용해 개발해 보고 싶었다.

2. React-Query의 무한 스크롤 기능을 사용해 보고 싶었다.

3. 요즘 AI 증사나 사진이 유행하면서 나도 AI를 이용해서 연관된 재밌는 서비스를 만들어 보고 싶었다.

## 핵심기능

✅ Open-AI의 DALL-E API를 사용해 AI이미지 생성

✅ React-Query의 무한 스크롤 기능 with Mantine Intersection hook

- next-auth로 간단한 소셜 로그인 구현(구글)
- DB mySql 사용

## 시행착오

- DALL-E가 Default로 이미지 URL을 리턴해주는데 시간이 지나면 사라졌다. 그래서 base64타입으로 받아 먼저 이미지 서버(Cloudinary)에 저장해 준 뒤 리턴했다.

- 무한 스크롤에서 버벅임 해결하기(미해결)

## 추가할 기능

1. StackOverFlow나 Reddit같은 Vote기능을 추가해서 어떤 이미지가 가장 귀여운지 순위를 메기면 재밌을 것 같다.

2. AI이미지 생성 API 호출 시 비용이 발생하기 때문에 계정 당 Limit 기능 추가하기

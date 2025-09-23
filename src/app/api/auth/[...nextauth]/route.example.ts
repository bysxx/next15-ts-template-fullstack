// TODO: NextAuth.js 사용하기 위해선 이 파일 이름 route.ts로 수정
import { authOptions } from "@libs/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

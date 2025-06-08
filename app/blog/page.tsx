import { redirect } from 'next/navigation';
//서버컴포넌트에서는 리다이렉트 함수로 페이지 이동
export default function Blog() {
  redirect('/');
}

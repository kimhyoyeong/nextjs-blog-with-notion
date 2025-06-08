//서버 액션 서버에서 실행되는 비동기 함수 : 서버컴포넌트와 클라이언트에 폼 제출 데이터 변경 가능
//서버 컴포넌트일 경우에는 페이지 내에 클라이언트 컴포넌트일경우 분리해야함

import { PostForm } from '@/components/features/blog/PostForm';

export default function WritePage() {
  return (
    <div className="container py-10">
      <PostForm />
    </div>
  );
}

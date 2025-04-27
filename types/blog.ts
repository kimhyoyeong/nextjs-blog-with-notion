// 블로그에서 사용하는 데이터 구조를 정의

export interface TagFilterItem {
  id: string; // 태그의 고유 ID
  name: string; // 태그 이름
  count: number; // 해당 태그가 사용된 게시물 수
}

export interface Post {
  id: string; // 게시물의 고유 ID
  title: string; // 게시물 제목
  description?: string; // 게시물 설명 (선택사항)
  coverImage?: string; // 커버 이미지 URL (선택사항)
  tags?: string[]; // 게시물 태그 목록 (선택사항)
  author?: string; // 작성자 (선택사항)
  date?: string; // 작성일 (선택사항)
  modifiedDate?: string; // 수정일 (선택사항)
  slug: string; // URL 친화적인 게시물 식별자
}

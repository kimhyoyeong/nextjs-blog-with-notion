// 이 파일은 데이터를 서버에서 fetch해서 각 섹션에 뿌려주는 Server Component입니다.
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PostCard } from '@/components/features/blog/PostCard';
import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import Link from 'next/link';
import { getPublishedPosts, getTags } from '@/lib/notion';

// Home 컴포넌트는 서버에서 posts, tags 데이터를 가져와서 각 섹션에 전달합니다.
export default async function Home({ searchParams }) {
  // 쿼리에서 tag 값 읽음 (서버에서 처리)
  const selectedTag = searchParams?.tag;

  // 서버에서 posts, tags 한 번에 받아옴 (posts는 태그로 필터링된 상태)
  const [posts, tags] = await Promise.all([getPublishedPosts(selectedTag), getTags()]);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측: 태그 필터 섹션 */}
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>
        {/* 중앙: 블로그 목록 및 정렬 */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="정렬 방식 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="oldest">오래된순</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* 게시글 카드 리스트 */}
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </div>
        {/* 우측: 프로필 및 연락처 */}
        <aside className="flex flex-col gap-6">
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

// 클라이언트 컴포넌트 (상호작용)
'use client';

import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function ClientComponent({ posts }: { posts: Post[] }) {
  // 선택된 포스트의 상태를 관리하는 useState 훅
  // 초기값은 null이며, 포스트가 선택되면 해당 포스트 객체로 업데이트됨
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 포스트 목록 */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">포스트 목록</h3>
          {posts.map((post) => (
            <div
              key={post.id}
              className="cursor-pointer rounded-lg border p-4 hover:bg-gray-50"
              onClick={() => setSelectedPost(post)}
            >
              <h4 className="font-medium">{post.title}</h4>
            </div>
          ))}
        </div>

        {/* 선택된 포스트 상세 */}
        <div className="rounded-lg border p-4">
          {selectedPost ? (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{selectedPost.title}</h3>
              <p className="text-gray-600">{selectedPost.content}</p>
            </div>
          ) : (
            <p className="text-gray-500">포스트를 선택해주세요</p>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="kimhyoyeong/notion-blog-nextjs-giscus"
      repoId="R_kgDOO5Dp6Q"
      category="Announcements"
      categoryId="DIC_kwDOO5Dp6c4CrSBZ"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="ko"
    />
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CalendarDays, Clock } from 'lucide-react';
import { getPublishedPosts } from '@/lib/notion';
import { formatDate } from '@/lib/utils';

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">블로그</h1>
          <p className="text-muted-foreground text-lg">
            웹 개발, 프로그래밍, 그리고 기술에 대한 이야기를 공유합니다.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group hover:bg-muted/50 h-full overflow-hidden transition-colors">
                {post.coverImage && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="mr-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl leading-tight font-bold">{post.title}</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="text-muted-foreground flex w-full items-center gap-4 text-sm">
                    {post.author && <span>{post.author}</span>}
                    {post.date && (
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5분 읽기</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

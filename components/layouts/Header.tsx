import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="container flex h-14 items-center px-4">
        <Link href="/" className="text-xl font-semibold">
          <span className="font-bold">Ella Blog</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/" className="hover:text-primary font-medium">
            홈
          </Link>
          <Link href="/blog" className="hover:text-primary font-medium">
            블로그
          </Link>
          <Link href="/about" className="hover:text-primary font-medium">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}

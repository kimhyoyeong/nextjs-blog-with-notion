import { Code2, Mail, Terminal, User } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ella 블로그 소개',
  description: 'ella 블로그 소개',
};

const menuItems = [
  { icon: User, label: 'Profile', href: '/about' },
  { icon: Code2, label: 'Skills', href: '/about/skills' },
  { icon: Terminal, label: 'Projects', href: '/about/projects' },
  { icon: Mail, label: 'Contact', href: '/about/contact' },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <nav className="sticky top-8">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

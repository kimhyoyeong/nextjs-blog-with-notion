'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function ProfileImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === 'light' ? '/images/user.png' : '/images/user.png'}
      alt="ella"
      width={144}
      height={144}
      className="object-cover"
    />
  );
}

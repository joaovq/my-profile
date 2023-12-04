'use client'
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '@/navigation';
import { pathnames } from '@/config';
 
export default function NavigationLink<
  Pathname extends keyof typeof pathnames
>({href, ...rest}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
 
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      style={{fontWeight: isActive ? 'bold' : 'normal'}}
      {...rest}
    />
  );
}
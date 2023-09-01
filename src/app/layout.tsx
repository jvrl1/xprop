import './globals.css';
import { ReactNode } from 'react';
import {
   Roboto_Flex as Roboto,
   Bai_Jamjuree as BaiJamjuree, 
} from 'next/font/google';
import { Sign } from '@/componentes/Sign';
import { EmptyMemories } from '@/componentes/EmptyMemories';
import { Hero } from '@/componentes/Hero';
import { Profile } from '@/componentes/Profile';
import { Copyright } from '@/componentes/Copyright';
import { cookies } from 'next/headers';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' });

export const metadata = {
  title: 'Xprop',
  description: 'Site básico construído com React, Next.js, TailwindCSS e TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="flex bg-[url(../assets/bg-stars.svg)] bg-cover flex-col items-start justify-between px-28 py-16 overflow-hidden">
            {/* blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        
            {/* stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes border-r border-white-10 bg-stripes" />
  
            {isAuthenticated ? <Profile /> : <Sign />}
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

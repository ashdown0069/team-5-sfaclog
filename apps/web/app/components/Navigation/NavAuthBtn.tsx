import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { auth, signOut } from '@/auth';

export async function NavAuthBtn() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <div className='flex'>
          <Image
            src={session.user.image || ''}
            width={30}
            height={30}
            alt='avatar'
            className='rounded-full'
          />
          <div className='mx-2  text-white'>{session?.user.name}</div>
          <div className='mx-2 text-white'>{session?.user.email}</div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button type='submit'>로그아웃</button>
          </form>
        </div>
      ) : (
        <div className='flex'>
          <Link href='/singup' className='mx-2 border-2 p-2  text-white'>
            회원가입
          </Link>
          <Link href='/login' className='mx-2 border-2 p-2  text-white'>
            로그인
          </Link>
        </div>
      )}
    </div>
  );
}

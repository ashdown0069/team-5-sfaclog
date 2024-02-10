import React from 'react';
import MyLog from './(components)/MyLog';
import MyProfile from './(components)/MyProfile';
import { MyProfileCard } from '@/components/Profile/MyProfileCard';
const getUserInfo = async (id: string) => {
  //임시 profile 용도
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`,
    { cache: 'no-cache' },
  );
  if (!response.ok) return {};
  const result = await response.json();
  return result;
};

async function MyPage() {
  // next authr가 Id줄거에요
  const nextAuthId = 'an6xvwgrbnfcsu8';
  const user = await getUserInfo('an6xvwgrbnfcsu8');
  return (
    <main className='mx-auto my-20 flex w-[1080px]'>
      <MyProfileCard user={user} />
      <MyLog userId={nextAuthId} />
      <MyProfile userId={nextAuthId} />
    </main>
  );
}

export default MyPage;

import React from 'react';
import NotFound from '../../../not-found';
import CommentSection from './(components)/CommentSection/CommentSection';
import ProfileSection from './(components)/ProfileSection/ProfileSection';
import ContentSection from './(components)/ContentSection/ContentSection';
import { UserProfileCard } from '@/components/Profile/UserProfileCard';

export const revalidate = 1;

const fetchData = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/log/${id}`,
  );
  if (!response.ok) return null;
  return response.json();
};

async function LogDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const log = await fetchData(id);
  if (!log || log.isDelete) return NotFound();

  return (
    <main className='container flex gap-16'>
      <div>
        {/* <ProfileSection user={log.expand.user} /> 나중에 확인하고 삭제바랍니다 */}
        <UserProfileCard user={log.expand.user} />
        <div>함께보면 좋은 로그</div>
      </div>
      <div className='w-full'>
        <ContentSection log={log} />
        <CommentSection logId={log.id} />
      </div>
    </main>
  );
}

export default LogDetailPage;

import Image from 'next/image';
import { CardBox } from './(components)/CardBox';
import { CardCategory } from './(components)/CardCategory';
import { CardTitle } from './(components)/CardTitle';
import { Avatar } from '../Avatar';
import { CardViews } from './(components)/CardViews';
import { CardLikes } from './(components)/CardLikes';
import { CardDate } from './(components)/CardDate';
import { LogType } from '@/types';
import Link from 'next/link';

interface LogCardProps {
  log: LogType;
}

export function LogCard({ log }: LogCardProps) {
  const series = log.expand?.series?.title
    ? log.expand.series.title
    : '카테고리명';
  const nickname = log.expand?.user?.nickname
    ? log.expand.user.nickname
    : '사용자명';

  return (
    <Link href={`/log/${log.id}`}>
      <CardBox type='log'>
        <div className='h-[280px] w-full overflow-hidden rounded-md'>
          {log.thumbnailUrl === '' ? (
            <div className='size-full bg-background-5' />
          ) : (
            <Image
              src={log.thumbnailUrl}
              width={0}
              height={0}
              sizes='100%'
              className='size-full object-cover'
              alt='thumbnail'
            />
          )}
        </div>
        <div className='w-full'>
          <div className='mb-2 flex items-center justify-between'>
            <CardCategory category={series} />
            <CardDate date={log.created} />
          </div>
          <div>
            <CardTitle title={log.title} />
          </div>
          <div className='mt-5 flex w-full justify-between'>
            <div className='flex items-center gap-2'>
              <Avatar size={24} />
              <span className='text-B3R12'>{nickname}</span>
            </div>
            <div className='flex gap-3'>
              <CardViews count={log.views} />
              <CardLikes count={log.likes} />
            </div>
          </div>
        </div>
      </CardBox>
    </Link>
  );
}

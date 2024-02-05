import Link from 'next/link';
import Image from 'next/image';
import { IconTaillessArrowRightBlue } from '@repo/ui/Icon';

interface SectionHeaderProps {
  title: string;
  more?: string;
}

export function SectionHeader({ title, more }: SectionHeaderProps) {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-H1M24'>{title}</p>
      {more && (
        <Link
          href={{ pathname: more }}
          className='text-B2R14 flex items-center justify-center gap-2 px-3 py-[6px]'
        >
          <span>더보기</span>
          <IconTaillessArrowRightBlue width={15} />
        </Link>
      )}
    </div>
  );
}

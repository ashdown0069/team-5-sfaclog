import React from 'react';
import MyLogList from './MyLogList';
import MyPageCategory from './MyPageCategory';

async function MyLog() {
  return (
    <div className='size-full'>
      <h1 className='text-primary mb-8 text-H1M24'>나의 활동</h1>
      <MyPageCategory />
      <MyLogList />
    </div>
  );
}

export default MyLog;

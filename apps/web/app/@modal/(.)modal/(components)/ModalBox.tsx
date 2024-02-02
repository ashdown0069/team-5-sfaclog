import React from 'react';
import ModalBody from './ModalBody';
import ModalButton from './ModalButton';

interface ModalBoxProps {
  title: string;
  description: string;
  action?: any;
}
function ModalBox({ title, description, action }: ModalBoxProps) {
  return (
    <div className='shadow-custom h-[172px] w-[306px] overflow-hidden rounded-[6px] bg-white'>
      <ModalBody title={title} description={description} />
      <ModalButton action={action} />
    </div>
  );
}

export default ModalBox;

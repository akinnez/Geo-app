import React, { ReactNode } from 'react';
import Overlay from './overlay';
import Card from './card';
import Button from './button';

function Modal({
  children,
  open = false,
  setOpen,
}: {
  children: ReactNode;
  open?: boolean;
  setOpen?: any;
}) {
  function setClose() {
    setOpen(false);
  }
  return (
    <>
      {open && (
        <Overlay>
          <Card styles="max-w-[900px] w-full max-h-[600px] overflow-y-auto py-5 px-3 lg:p-5 ">
            <Button styles="float-end" click={setClose}>
              X
            </Button>
            <div className="p-5">
              <>{children} </>
            </div>
          </Card>
        </Overlay>
      )}
    </>
  );
}

export default Modal;

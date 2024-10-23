import { ReactNode } from 'react';

function Card({ children, styles }: { children: ReactNode; styles?: string }) {
  return (
    <>
      <div
        className={`bg-white text-foreground rounded-2xl shadow-xl shadow-foreground ${styles}`}
      >
        {children}
      </div>
    </>
  );
}

export default Card;

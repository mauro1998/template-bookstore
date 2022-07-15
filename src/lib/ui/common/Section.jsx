import React from 'react';

export default function Section({ children, className }) {
  return (
    <section className={`lg:min-h-screen min-h-[38rem] ${className}`}>
      {children}
    </section>
  );
}

import { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
  return (
    <section className="w-full h-full bg-blue-100">
      <article className="flex flex-col items-center justify-start h-screen py-56">
        {props.children}
      </article>
    </section>
  );
};

export default Layout;

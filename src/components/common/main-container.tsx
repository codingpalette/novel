interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <section className="max-w-screen-md mx-auto p-4 bg-white w-full min-h-dvh  dark:bg-zinc-900">
      {children}
    </section>
  );
}

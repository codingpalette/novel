import Aside from "./_components/Aside";
import { Content } from "./_components/Content";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Aside />
        <Content>{children}</Content>
      </div>
    </>
  );
}

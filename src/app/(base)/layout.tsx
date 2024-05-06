import {Aside} from "@/components/widgets/aside";
import {LayoutProvider} from "@/components/app/providers";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Aside />
        <LayoutProvider>{children}</LayoutProvider>
      </div>
    </>
  );
}

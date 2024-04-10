import MainContainer from "@/components/common/main-container";

import NovelForm from "./_components/novel-form";
import { ThemeToggle } from "@/components/common/theme-toggle";

export default function NovelPage() {
  return (
    <>
      <MainContainer>
        <div className="flex flex-col md:justify-center w-full h-full">
          <div className="ml-auto mb-4">
            <ThemeToggle />
          </div>
          <NovelForm />
        </div>
      </MainContainer>
    </>
  );
}

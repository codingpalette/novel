"use client";

import MainContainer from "@/components/common/main-container";
import NovelForm from "./_components/novel-form";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { useState } from "react";
import NovelCard from "./_components/novel-card";

export default function NovelPage() {
  const [novelContent, setNovelContent] = useState<any>([]);

  return (
    <>
      <MainContainer>
        <div className="flex flex-col md:justify-center w-full h-full">
          <div className="ml-auto mb-4">
            <ThemeToggle />
          </div>
          <NovelForm
            novelContent={novelContent}
            setNovelContent={setNovelContent}
          />
          <div className="mt-4">
            {novelContent &&
              novelContent.map((v: any) => (
                <NovelCard
                  key={v.id}
                  content={v.content}
                  genre={v.genre}
                  id={v.id}
                  novel={v.novel}
                  title={v.title}
                />
              ))}
          </div>
        </div>
      </MainContainer>
    </>
  );
}

"use client";

import MainContainer from "@/components/common/main-container";
import NovelForm from "./_components/novel-form";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { useState } from "react";
import NovelCard from "./_components/novel-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NovelPage() {
  const [novelContent, setNovelContent] = useState<any>(null);

  return (
    <>
      <NovelForm novelContent={novelContent} setNovelContent={setNovelContent} />
      {novelContent && <NovelCard novel={novelContent.novel} />}
    </>
  );
}

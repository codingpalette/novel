"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { novelCreate } from "@/api/novel/api";
import { novelCreateSchema } from "@/api/novel/types";
import { Loader2 } from "lucide-react";
import { useId, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface NovelFormProps {
  novelContent?: any;
  setNovelContent?: any;
}

export default function NovelForm({ novelContent, setNovelContent }: NovelFormProps) {
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof novelCreateSchema>>({
    resolver: zodResolver(novelCreateSchema),
    defaultValues: {
      content: "",
      genre: "로맨스",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof novelCreateSchema>) {
    setLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // const aa = `{
    //             "title": "황홀한 만남의 봄날",
    //             "novel": "그 날은 일상과 다름없는, 아름답게 빛나는 봄의 하루였다. 아침부터 펼쳐진 날씨는 기억에 빠져드는 것만 같은 따듯함을 품고 있었다. 그 따듯함이 마치 인생의 새로운 장을 시작하듯, 알 수 없는 힘으로 나를 밖으로 이끌었다. \n\n거리를 걷다 보니 먼저 내 눈에 들어온 것은 싱그러운 봄바람이었다. 그 바람은 마치 누군가를 기다리는 것처럼 부드럽게 나를 감싸며, 낯선 마음을 설레게 만들었다. \n\n그러던 중 대충 치우지 않은 카페 테이블에서 노트북으로 무언가를 집중하고 있는 모자를 쓴 남자를 보게 되었다. 그의 가벼운 눈빛과 함께 나는 봄의 바람처럼 마음이 싱그러워졌다. 그 순간, 그 남자와 나의 눈이 마주치자 내 마음에 번쩍이는 불꽃이 튀었다. \n\n그렇게 진심으로 웃는 그를 보며 나는 진심으로 봄이 찾아온 것을 느꼈다. 그날은 나에게 새로운 시작과 새로운 만남, 그리고 즐거운 감동을 주었다. 그날, 그 햇살처럼 따스한 감정을 처음으로 느낀 날이었다. 이렇게 나는 아름다운 봄날, 그와의 황홀한 만남이 시작되었다."
    //           }`;
    // const bb = JSON.parse(aa);
    const res = await novelCreate(values);
    console.log("res", res);
    if (res) {
      const newData = {
        novel: res,
        values,
      };
      setNovelContent(newData);
      // setNovelContent([newData, ...novelContent]);
    }
    // if (res && JSON.parse(res)) {
    //   console.log(JSON.parse(res));
    //   // const id = useId();
    //   const newData = {
    //     ...JSON.parse(res),
    //     content: values.content,
    //     genre: values.genre,
    //     id: novelContent.length + 1,
    //   };
    //   setNovelContent([newData, ...novelContent]);
    // }
    setLoading(false);
  }
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>소설을 작성해 드립니다!!</CardTitle>
          <CardDescription>소설에 필요한 짧은 글을 작성해 주세요.</CardDescription>
          <CardContent className="p-0">
            <div className="mt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>내용</FormLabel>
                        <FormControl>
                          <Textarea placeholder="오늘은 날씨가 무척이나 따듯하고 화창한 날씨였다. 싱긋한 봄바람과 함께 새로운 만남이 있을것만 같다." rows={5} {...field} />
                        </FormControl>
                        {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>장르를 선택해 주세요.</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="장르를 선택해 주세요." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="로맨스">로맨스</SelectItem>
                            <SelectItem value="판타지">판타지</SelectItem>
                            <SelectItem value="추리">추리</SelectItem>
                            <SelectItem value="스릴러">스릴러</SelectItem>
                            <SelectItem value="공포">공포</SelectItem>
                            <SelectItem value="게임">게임</SelectItem>
                            <SelectItem value="과학">과학</SelectItem>
                          </SelectContent>
                        </Select>
                        {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    소설 만들기
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
}

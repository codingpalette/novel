"use server";
import OpenAI from "openai";
import { novelCreateSchema } from "./types";
import { z } from "zod";
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function novelCreate(values: z.infer<typeof novelCreateSchema>) {
  console.log(values);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
            1. 너는 이제 소설을 만들어 주는 AI야 유저가 제시한 장르와 콘텐츠를 가지고 소설을 작성해줘
            2. 소설은 줄바꿈이 포함된 문자열로 반환되어야 한다.
            3. 소설은 최대 5천자 이내로 작성되어야 한다.
          `,
      },
      {
        role: "user",
        content: `
          genre: ${values.genre}
          content: ${values.content}
        `,
      },
      // 3. 반환되는 message.content 가 JSON.parse 가능한 형태여야 한다.
      // 4. novel 은 줄바꿈이 포함된 문자열이어야 한다.
      // {
      //   role: "assistant",
      //   content: "The Los Angeles Dodgers won the World Series in 2020.",
      // },
      // { role: "user", content: "Where was it played?" },
    ],
    model: "gpt-4",
  });

  console.log(completion.choices[0]);
  return completion.choices[0].message.content;
}

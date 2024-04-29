import { z } from "zod";

export const novelCreateSchema = z.object({
  content: z
    .string()
    .min(10, {
      message: "10자 이상 입력해 주세요.",
    })
    .max(2000, {
      message: "2000자 이하로 입력해 주세요.",
    }),
  genre: z.string(),
});

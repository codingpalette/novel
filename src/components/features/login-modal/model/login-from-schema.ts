import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(2, {
    message: "2글자 이상이어야 합니다.",
  }).email('이메일 형식이 아닙니다.'),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

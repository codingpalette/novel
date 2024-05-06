"use server"

import { z } from "zod";
import { loginFormSchema } from "../model/login-from-schema";

export async function LoginAPI(values: z.infer<typeof loginFormSchema>) {
  return true;
}

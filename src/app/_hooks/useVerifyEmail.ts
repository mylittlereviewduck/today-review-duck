import { useMutation } from "@tanstack/react-query";
import { authInstance } from "../api/axios";

/*
 이메일 인증번호 검증 API 요청 Hook
 */
export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: async ({ email, code }: { email: string; code: string }) => {
      const response = await authInstance.post("/email/verify", {
        email,
        code,
      });
      return response.data;
    },
  });
};

"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import ButtonModal from "@/app/components/modals/ButtonModal";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import axios from "axios";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, { message: "2文字以上入力する必要があります。" }),
  email: z.string().email({ message: "メールアドレスの形式ではありません。" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります。" }),
});

const SignupButton: React.FC = () => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const loginModal = useLoginModal();
  const [loading, setLoading] = useState(false);

  const openModal = useCallback(() => {
    signupModal.onOpen();
  }, [signupModal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
    resolver: zodResolver(schema),
  });

  const onToggle = useCallback(() => {
    signupModal.onClose();
    loginModal.onOpen();
  }, [signupModal, loginModal]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post("/api/signup", data);

      if (res.status === 200) {
        toast.success("アカウントを作成しました!");

        await signIn("credentials", {
          ...data,
          redirect: false,
        });

        signupModal.onClose();
        router.refresh();
      }
    } catch (error) {
      toast.error("エラーが発生しました。" + error);
    } finally {
      setLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        label="名前"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="email"
        label="メールアドレス"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="パスワード"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Googleでログイン"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />

      <div className="mt-4 text-center">
        <div
          onClick={onToggle}
          className="cursor-pointer text-sm text-neutral-500 hover:underline"
        >
          ログインする
        </div>
      </div>
    </div>
  );

  return <div className="flex justify-center"></div>;
};

export default SignupButton;

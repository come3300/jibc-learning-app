'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Input from '@/app/components/input/Input';
import Button from '@/app/components/button/Button';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: '2文字以上入力する必要があります。' }),
  email: z.string().email({ message: 'メールアドレスの形式ではありません。' }),
  password: z.string().min(6, { message: '6文字以上入力する必要があります。' }),
});

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: '', email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post('/api/signup', data);

      if (res.status === 200) {
        toast.success('アカウントを作成しました!');

        await signIn('credentials', {
          ...data,
          redirect: false,
        });

        router.refresh();
        router.push('/home');
      }
    } catch (error) {
      toast.error('エラーが発生しました。' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">サインアップ</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          サインアップ
        </button>
        <hr />
      </form>
    </div>
  );
};

export default SignupPage;

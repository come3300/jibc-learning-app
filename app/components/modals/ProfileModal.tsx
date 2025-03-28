'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { User } from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod';

import useProfileModal from '@/app/hooks/useProfileModal';
import Modal from '@/app/components/modals/Modal';
import Input from '@/app/components/input/Input';
import ImageUpload from '@/app/components/input/ImageUpload';
import axios from 'axios';
import * as z from 'zod';

enum STEPS {
  CONTENT = 0,
  IMAGE = 1,
}

const schema = z.object({
  name: z.string().min(2, { message: '2文字以上入力する必要があります。' }),
  image: z.string().optional(),
});

type ProfileModalProps = {
  currentUser: User | null;
};

const ProfileModal: React.FC<ProfileModalProps> = ({ currentUser }) => {
  const router = useRouter();
  const profileModal = useProfileModal();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CONTENT);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

  const image = watch('image');

  const setCustomValue = (id: string, value: string) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        image: currentUser.image || '',
      });
    }
  }, [currentUser, reset]);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const primaryLabel = useMemo(() => {
    if (step === STEPS.IMAGE) {
      return '編集';
    }

    return '次へ';
  }, [step]);

  const secondaryLabel = useMemo(() => {
    if (step === STEPS.CONTENT) {
      return undefined;
    }

    return '戻る';
  }, [step]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.IMAGE) {
      return onNext();
    }

    setLoading(true);

    try {
      const res = await axios.patch('/api/profile', data);

      if (res.status === 200) {
        toast.success('プロフィールを変更しました!');
        setStep(STEPS.CONTENT);
        profileModal.onClose();
        router.refresh();
      }
    } catch (error) {
      toast.error('エラーが発生しました。' + error);
      return;
    } finally {
      setLoading(false);
    }
  };

  const getBodyContent = (): React.ReactElement => {
    if (step === STEPS.IMAGE) {
      return (
        <div>
          <ImageUpload
            onChange={(value) => setCustomValue('image', value)}
            value={image}
          />
        </div>
      );
    }

    return (
      <div>
        <Input
          id="name"
          label="名前"
          type="text"
          disabled={loading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  };

  return (
    <Modal
      disabled={loading}
      isOpen={profileModal.isOpen}
      title="プロフィール"
      primaryLabel={primaryLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryLabel={secondaryLabel}
      secondaryAction={step === STEPS.CONTENT ? undefined : onBack}
      onClose={() => {
        profileModal.onClose();
        setStep(STEPS.CONTENT);
      }}
      body={getBodyContent()}
    />
  );
};

export default ProfileModal;

// ButtonModal.tsx
import { useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '@/app/components/button/Button';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  primaryLabel: string;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  disabled?: boolean;
  del?: boolean;
};

const ButtonModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  primaryLabel,
  secondaryAction,
  secondaryLabel,
  disabled,
  del = false,
}) => {
  // 閉じる
  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    onClose()
  }, [onClose, disabled])

  // メインボタンのアクション
  const handleSubmit = useCallback(() => {
    if (!disabled) {
      return
    }

    onSubmit()
  }, [onSubmit, disabled])
  return (
    <>
        <Button
            disabled={disabled}
            label={primaryLabel}
            onClick={handleSubmit}
            del={del}
                  />

    </>
  );
};

export default ButtonModal;


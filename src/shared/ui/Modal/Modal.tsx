import { classNames } from 'shared/lib/classNames/classNames';
import {
    Children, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';

 interface ModalProps {
 className?: string;
 children?: ReactNode;
 isOpen: boolean;
 onClose: () => void;
 }

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className = '',
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };
    // новые ссылки на каждый рендер. Чтобы сохранить старую сссылку - добавить useCallback
    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        clearTimeout(timerRef.current);
        window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

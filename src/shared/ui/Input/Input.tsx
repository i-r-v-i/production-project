import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}
export const Input = memo((props: InputProps) => {
    const {
        className = '', value, type = 'text', onChange, ...otherProps
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );
});

export default Input;

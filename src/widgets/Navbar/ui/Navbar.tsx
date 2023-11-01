import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavBarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classNames(cls.mainLink)}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>

    </div>
);

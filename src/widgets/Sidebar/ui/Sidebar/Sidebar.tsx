import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToogle}>toogle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};

export default Sidebar;

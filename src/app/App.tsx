import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/ui";
import { AppRouter } from "./providers/router";


const App = () => {
const {theme, toogleTheme} = useTheme()
  return (
    <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
      <button onClick={toogleTheme}>Change theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter/>
    </div>
  );
};

export default App;

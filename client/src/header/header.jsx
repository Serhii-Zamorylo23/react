import s from "./header.module.scss"
import Buttons from "../components/Button/button"
const Header=()=>{
    <header className={s.Header}>
        <h1 className="{s.Header_Logo}">Logo title</h1>
        <nav className="{s.Header_nav}">Navigation</nav>
        <Buttons text="Sign- in"/>
        <Buttons text="Sign- up"/>
    </header>
}
export default Header
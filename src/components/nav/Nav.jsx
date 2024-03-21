import style from './Nav.module.css';

function Nav() {
    return (
        <nav className={style.mainNav}>
            <a className={`${style.navLink} ${style.active}`} href="/">About</a>
            <a className={style.navLink} href="/">Portfolio</a>
            <a className={style.navLink} href="/">Job</a>
            <a className={style.navLink} href="/">Contact</a>
        </nav>
    );
}

export { Nav };
import NavBar from "./nav-bar";
import NavLinks from "./navlinks";
import styles from './Navigation.module.css'
export default function Navigation(){
    return(
        <NavBar styles={styles}>
            <NavLinks/>
        </NavBar>
    )
}
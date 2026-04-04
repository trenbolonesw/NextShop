import Link from "next/link";
import styles from './Navigation.module.css'
import NavLink from "./NavLink";
export default function NavLinks(){
    return(
        <>
        <div className={styles.menu}>
            <NavLink href={'/Shop'} name="Sales" style={styles.Links}/>
            <NavLink href={'/adminCruds'} name="Create" style={styles.Links}/>
            <NavLink href="/Deals" name="Deals" style={styles.Links}/>
            <NavLink href='/Cart' name="icon" style={styles.Links}/>
        </div>
        </>
    )
}
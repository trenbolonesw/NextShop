import Link from "next/link";

export default function NavLink({name,href,style}){
    return(
        <>
        <Link href={href} className={style}>{name}</Link>
        </>
    )
}
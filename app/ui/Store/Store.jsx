'use client'
import { useState,useEffect } from "react"
import Link from "next/link"
export default function Store(){

 const [item,setItems] = useState([])


useEffect(() => {
    fetchItems()
},[])

const fetchItems = async () => {
    const res = await fetch('/api/item')
    const data = await res.json()
    setItems(data.data)

 }

    return(
        <>
        {
           item.length > 0 ? item.map((item) => (
                <Link key={item._id} href={`/item/${item._id}`}><li>{item.name}</li></Link>
                
            )):<p>no data</p>
        }
        </>
    )
}
'use client'
import { useState,useEffect } from "react"
import ItemCard from "./Item"
import { useHttpClient } from "../../hooks/http-hook"
import styles from './Store.module.css'
export default function Store(){

 const [item,setItems] = useState([])

 const {sendRequest} = useHttpClient()

useEffect(() => {
    fetchItems()
},[])

const fetchItems = async () => {
    try{
        const res = await sendRequest('/api/item')
    setItems(res.data)

    }catch(e){
        console.log(e)
    }
   
 }

    return(
        <>
        <div className={styles.StoreItems}>
        {item.map((item) => (
             <ItemCard src={item.image} Id={`/item/${item._id}`} key={item._id} Src={item.image} Title={item.name}/>
        ))}
           </div>
        </>
    )
}
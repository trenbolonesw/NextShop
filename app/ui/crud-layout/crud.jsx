//add styles later

export default function CrudPage({children,name}){
    return (
        <div>
            <h1>{name}</h1>
            {children}
        </div>
    )
}
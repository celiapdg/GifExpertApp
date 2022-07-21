import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // no poner nunca los useState dentro de condiciones, porque si no
    // react pierde el orden de los estados
    // sin embargo, podemos crear tantos useState como queramos
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <button onClick={onAddCategory}>Añadir</button> */}
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                // en map, podemos tener dos argumentos (c, index)
                // podriamos pensar en usar ese indice como key
                // el equipo de react no lo recomienda, usa ese valor
                // para saber cuando un elemento se eliminó
                // podria haber errores a raiz de esto
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                )
                )}


        </>
    )
}
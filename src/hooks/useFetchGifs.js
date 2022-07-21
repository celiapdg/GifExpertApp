import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // recibe una funcion callback, y una lista de dependencias,
    // que son las condiciones bajo las que queremos ejecutar ese callback
    // useEffect no puede ser asíncrono
    useEffect(() => {
        // declaramos la funcion fuera del componente para que este no la esté
        // procesando cada vez que se renderiza
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}

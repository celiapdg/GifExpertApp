import { useState, useEffect } from "react";
// use effect se usa para disparar
// efectos secundarios
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifCard
                            key={image.id}
                            {...image} // así se reciben todas las propiedades como props
                        />
                    ))
                }
            </div>
        </>
    )
}

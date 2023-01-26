import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading( false );
    }

    useEffect( ()=>{
        getImages(category);
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}

//Un hook no es mas que una funcion que devuelve algo

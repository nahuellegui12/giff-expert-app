import { useState } from 'react';
import { AddCategory, GifGrid } from './components/index';
import './styles.css';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onaddCategory = ( newCategory ) =>{
        if( categories.includes(newCategory) ) return; //Antes de insertar la nueva categoria, valida si ya existe en el arreglo. Si la "newCategories" ya existe en "categories", salí de la funcion, no hagas nada.

        setCategories([newCategory, ...categories]); //Utilizamos el operador spread para generar una copia de categories
        // setCategories(cat => [...cat, "Valorant"])
    }
  return (
    <>
        <h1>GiffExpertApp</h1>
        
        <AddCategory //Aca le envio la funcion "setCategories" como una props para poder usarla en "AddCategory"
            onNewCategory= {(value) => onaddCategory(value)}
        /> 

        {
            categories.map(category=>(
                <GifGrid key={ category } category={ category }/>
            ))
        }
    </>
  )
}

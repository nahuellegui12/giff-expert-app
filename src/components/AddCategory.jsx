import { useState } from "react";
 

export const AddCategory = ({onNewCategory}) => { /*Desestructuro la prop que envie en "AddCategory" para poder utilizarla*/

  const [inputValue, setInputValue] = useState("");
  
  const onInputChange= (event)=>{
    setInputValue(event.target.value);
    console.log(event)
  }

  const onSubmit = ( event ) =>{
    event.preventDefault();
    if(inputValue.trim().length <=1 ) return;

    // setCategories(categories => [inputValue, ...categories]); /*Utilizo el callBack que me permite usar el Hook useState e inserto el nuevo "inputValue" seguido de la desestructuracion de las categorias (categories) anteriores"*/
    onNewCategory(inputValue.trim());
    setInputValue("");
  }
  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Buscar Gifs" 
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

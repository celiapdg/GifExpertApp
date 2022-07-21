import { useState } from 'react'

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // props.setCategories(c => [inputValue, ...c])
        props.onNewCategory(inputValue.trim());
        setInputValue(''); // asi se vacía cuando se inserte
    }



    return (
        <>
            <form action=""
                onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button type="submit">Añadir</button>
            </form>

        </>

    )
}

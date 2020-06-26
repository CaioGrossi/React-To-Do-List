import React, {useState} from 'react';

import './style.css'

const ProjectForm = (props) => {
    
    const [infoProjeto, setInfoProjeto] = useState('');

    function handleInputChange (event) {
        
        const valor = event.target.value;

        setInfoProjeto(valor);
    }

    function handleSubmit (event) {
        event.preventDefault();
        props.adicionar(infoProjeto);
    }

    return (
        <form onSubmit={handleSubmit} onReset={props.cancelar} id="formProjeto">
            <h1>Adicionar projeto</h1>

            <label htmlFor="nome">Nome</label>
            <input type="text" required name="nome" onChange={handleInputChange}></input>

            <div id="botoes">
                <input type="submit"></input>
                <input type="reset"></input>
            </div>

        </form>
    );
}

export default ProjectForm;
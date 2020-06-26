import React, {useState} from 'react';

import './style.css';

const TaskForm = (props) => {

    const [tarefa, setTarefa] = useState({
        projeto: '',
        nome: '',
        data: '',
        prioridade: '',
        feito: false
    });

    function handleInputChange (event) {
        
        const {name, value} = event.target;

        setTarefa({...tarefa, [name]: value});
    }

    function handleSubmit (event) {
        event.preventDefault();
        props.adicionar(tarefa);
    }

    return (
        <form onSubmit={handleSubmit} onReset={props.cancelar} id="formTarefa">
            <h1>Adicionar tarefa</h1>

            <label htmlFor="nome">Nome</label>
            <input type="text" required name="nome" onChange={handleInputChange}></input>
            <label htmlFor="data">Data</label>
            <input type="date" name="data" onChange={handleInputChange}></input>
            <label htmlFor="prioridade">Prioridade</label>
            <select name="prioridade" onChange={handleInputChange}>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baixa">Baixa</option>
            </select>
            <div id="botoes2">
                <input type="submit"></input>
                <input type="reset"></input>
            </div>
    
        </form>
    )
}

export default TaskForm;
import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs'

const Task = (props) => {

    return (
        <div className="tarefa">
            <input type="checkbox"></input>
            <h2>{props.dados.nome}</h2>
            <h2>{props.dados.prioridade}</h2>
            <h2>{props.dados.data}</h2>
            <BsFillTrashFill className="inconRemover" onClick={() => props.remover(props.id)}/>
        </div>
    )
}

export default Task;
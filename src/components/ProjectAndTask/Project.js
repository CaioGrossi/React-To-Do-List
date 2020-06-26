import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs';

import './style.css'

const Project = (props) => {

    return (
        <div className="projeto">
            <h2 className="nome" onClick={() => props.selecionar(props.id)}>{props.dados}</h2>
            <BsFillTrashFill className="inconRemover" onClick={() => props.remover(props.id)}/>
        </div>
    )
}

export default Project;
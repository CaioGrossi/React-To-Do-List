import React, {useState} from 'react';
import TaskForm from '../TaskForm/TaskForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import Task from '../ProjectAndTask/Task';
import Project from '../ProjectAndTask/Project';


import {FiPlus} from 'react-icons/fi'

import './style.css'

const ToDoList = () => {

    const [tarefas, setTarefas] = useState([]);
    const [projetos, setProjetos] = useState([]);
    const [projetoAtual, setProjetoAtual] = useState(-1);

    const [mostraFormProjeto, setMostraFormProjeto] = useState(false);
    const [mostraFormTarefa, setMostraFormTarefa] = useState(false);


    function adicionarTarefa (tarefa) {

        setMostraFormTarefa(false);

        if (projetoAtual < 0) {
            alert("Crie um projeto primeiro!")
        }

        else {
            setTarefas([...tarefas,{
                projeto: projetoAtual,
                nome: tarefa.nome,
                data: tarefa.data,
                prioridade: tarefa.prioridade,
                feito: tarefa.feito
            }])
        }
    }

    function adicionarProjeto (projeto) {

        setMostraFormProjeto(false);

        setProjetoAtual(projetoAtual + 1);

        setProjetos([...projetos, projeto]);
    }

    function removerTarefa (id) {

        setTarefas(tarefas.filter((tarefa, index) => index !== id));

    }

    function removerProjeto (id) {

        setProjetos(projetos.filter((projeto, index) => index !== id));

        setTarefas(tarefas.filter(tarefa => tarefa.projeto !== id));

        setTarefas(prevTarefa => atualizaProjeto(prevTarefa, id))

        if (projetos.length === 0) {
            setProjetoAtual(-1);
        } else {
            setProjetoAtual(id - 1);
        }

    }

    function atualizaProjeto (prevTarefa, id) {
        prevTarefa.map(tarefa => {
            if (tarefa.projeto > id) {
                tarefa.projeto--;
            }
            return tarefa;
        })

        return prevTarefa;
    }

    function mudarProjeto (id) {
        setProjetoAtual(id);
    }

    function sumirForm () {
        setMostraFormProjeto(false);
        setMostraFormTarefa(false);
    }

    return (
        <div id="lista">
            <div id="projeto">
                <div className="cabecalho">
                    <h1>Projetos</h1>
                    <FiPlus className="plus" onClick={() => setMostraFormProjeto(true)}/>
                </div>

                <div id="projetos">
                    {projetos.map((projeto, index) => (
                        <Project 
                            key={index} 
                            dados={projeto} 
                            id={index}
                            remover={removerProjeto}
                            selecionar={mudarProjeto}
                        />
                    ))}
                </div>
            </div>

            <div id="tarefa">
                <div className="cabecalho">
                    <h1>Tarefas</h1>
                    <FiPlus className="plus" onClick={() => setMostraFormTarefa(true)}/>
                </div>

                <div id="tarefas">
                    {tarefas.map((tarefa, index) => {
                       if (tarefa.projeto === projetoAtual) { 
                            return (
                            <Task 
                                key={index} 
                                dados={tarefa} 
                                id={index}
                                remover={removerTarefa}
                            />)
                       }

                       return;
                    }
                    )}
                </div>
            </div>  

            <h1 onClick={() => console.log(projetos, tarefas)}>TESTE</h1>

            {mostraFormProjeto && <ProjectForm adicionar={adicionarProjeto} cancelar={sumirForm}/>}
            {mostraFormTarefa && <TaskForm adicionar={adicionarTarefa} cancelar={sumirForm}/>}
        </div>
    );
}

export default ToDoList;




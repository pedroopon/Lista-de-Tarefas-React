import React, { useState } from 'react';
import './ListaDeTarefas.css'



function ListaDeTarefas() {

    const [tarefas, setTarefas] = useState([]);

    const [novaTarefa, setNovaTarefa] = useState('');



    const adicionarTarefa = () => {

        if (novaTarefa.trim() !== '') {

            setTarefas([...tarefas, novaTarefa]);

            setNovaTarefa('');

        }

    };



    const removerTarefa = (index) => {

        const novasTarefas = [...tarefas];

        novasTarefas.splice(index, 1);

        setTarefas(novasTarefas);

    };



    return (

        <div className='container'>

            <h2>Lista de Tarefas</h2>
            <div className="box">
                <input

                    type="text"

                    value={novaTarefa}

                    onChange={(e) => setNovaTarefa(e.target.value)}

                    placeholder="Adicione uma nova tarefa"

                />

                <button className='add' onClick={adicionarTarefa}>Adicionar</button>


            </div>

            <div className="result">

                <ul>

                    {tarefas.map((tarefa, index) => (

                        <li key={index}>

                            {tarefa}{' '}

                            <button className='remove' onClick={() => removerTarefa(index)}>Remover</button>

                        </li>

                    ))}

                </ul>



            </div>



        </div>

    );

}



export default ListaDeTarefas; 
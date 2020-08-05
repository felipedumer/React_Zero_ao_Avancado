import React from 'react';
import {Container, Formulario, SubmitButton} from './styles';
import {FaGithub, FaPlus} from 'react-icons/fa';

export default function Main() {
    return (
        <Container>

            <h1>
                <FaGithub size={25}/>
                Meus repositórios
            </h1>

            <Formulario onSubmit={() => {}}>
                <input type={"text"} placeholder={"Adicionar Repositorios"}/>

                <SubmitButton>
                    <FaPlus> color="#FFF" size={14}</FaPlus>
                </SubmitButton>

            </Formulario>

        </Container>
    )
}
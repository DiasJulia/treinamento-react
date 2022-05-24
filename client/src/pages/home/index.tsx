import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi, Foto } from '../../assets';
import "./style.css";

export const Home = () => {
    function changeText(){
        let text = document.getElementById("text");
        if(text) {
            if(text.innerHTML === "") {
                text.innerHTML = "O PTA é um ambiente de aprendizagem, onde você vai poder criar conexões, desenvolver conhecimentos tecnicos, habilidades interpessoais e muito mais!";
            }else{
                text.innerHTML = "";
            }
        }
    }

    return (
        <div className="card">
            <h1>Bem vindos ao PTA</h1>
            <img src={Foto} alt="" />
            <p id="text"></p>
            <button onClick={changeText}>Saiba mais</button>
        </div>
    );
}
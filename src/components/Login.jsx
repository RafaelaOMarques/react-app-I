import { useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React from "react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: antiquewhite;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px ;
`


const Label = styled.label`
  font-size: 16px;
`

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

function Login(){
  const [user, setUser] = useState('')
  const [senha, setSenha] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const userCadastrado = "rafaelao.marques@gmail.com"
  const senhaCadastrada = "1234"
  const entrar = ()=>{
    if(user != userCadastrado){
      alert("Usuário inválido")
      return      
    }

    if(senha != senhaCadastrada){
      alert("Senha inválida")
      return
    }

    if(user === userCadastrado && senha === senhaCadastrada){
      alert("Logando...")
      setIsLoggedIn(true);
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/generatorcode" />;
  }


  return(
    <>
      <Container>
        <h1 style={{ marginBottom: '10px' }}>Faça seu Login</h1>
        <Label>Usuário: <Input type="text" placeholder="E-mail" value={user} onChange={(e)=>setUser(e.target.value)}/></Label>
        <Label>Senha: <Input type="password" placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/></Label>
        <Button onClick={entrar}>Entrar</Button>

      </Container>
    
    </>
  )
}

export default Login
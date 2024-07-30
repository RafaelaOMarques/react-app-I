import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: red;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
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
  background-color: green;
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

const ResultFindIP = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; 
  overflow-y: auto; 
  width: 100%;
`

function IPAddressFinder(){
  const [ip, setIP] = useState('')
  const [ipData, setIPData] = useState(null)

  const findIP = async () =>{
    try{
      const response = await axios.get(`https://ipinfo.io/${ip}/json`)
      setIPData(response.data)
    } catch(error){
      console.error(error)
    }
  }

  return(
    <Container>
      <Title></Title>
      <Input type="text" value={ip} onChange={(e)=> setIP(e.target.value)} placeholder="Insira o IP"/>
      <button onClick={findIP}>Buscar IP</button>
      {ipData && (
        <ResultFindIP>
          <p>IP: {ipData.ip}</p>
          <p>Location: {ipData.city}, {ipData.region}, {ipData.country}</p>
          <p>ISP: {ipData.org}</p>
        </ResultFindIP>
      )}
    </Container>
  )

}
export default IPAddressFinder
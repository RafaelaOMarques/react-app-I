import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import QRCode from "qrcode.react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: pink;
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

const QRContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; 
  overflow-y: auto; 
  width: 100%;
`

const QRCodeGenerator = ()=>{

  const [qrCodeImage, setQRCodeImage] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const qrGenerator = async ()=>{
    try {
      const response = await axios.get(`http://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}&size=100x100`, {
        responseType: 'blob', // Importante para obter o blob da imagem
      });
      const imageURL = URL.createObjectURL(response.data);
      setQRCodeImage(imageURL);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Title>Gerador de QR Code</Title>
      <Input  type="text" value={qrCodeValue} placeholder="Insira o conteúdo para gerar QR Code" onChange={(event) => setQRCodeValue(event.target.value)}/>
      {qrCodeImage && (
        <QRContainer>
          <img src={qrCodeImage} alt="QR Code" />
        </QRContainer>
      )}
      <Button onClick={qrGenerator}>Gerar QR Code</Button>
    </Container>
  )

}
export default QRCodeGenerator
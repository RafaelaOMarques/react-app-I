import {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align- items: center;
  justify-content: center;

`

const Title = styled.h2`
  color: blue;
  text-align: center;
`

const Label = styled.label`
  font-size: 0.8rem;
  gap: 1px;
`


const Select = styled.select`
  margin: 10px 0;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 40%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
`

const Input = styled.input`
  margin: 10px 0;
  padding: 5px 5px 20px 5px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
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

const TranslatedText = styled.p`
  color: #333;
  border-radius: 5px solid red;

`



const LanguageTranslator = () =>{
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('pt')

  const translateText = async ()=>{
    try{

      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        }
      }
        
      )
      setTranslatedText(response.data.responseData.translatedText)
    }catch(error){
      console.error('Erro ao traduzir o texto. ', error)
    }
  }
  return (
    <>
    
      <Container>
        <Title style={{marginBottom: '10px'}}> Language Translator </Title>
          <div>
            <Label>Idioma do texto:
            </Label>
            <Select value={sourceLang} onChange={(event)=> setSourceLang(event.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanis</option>
              <option value="fr">French</option>
              <option value="ge">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>

            </Select>
          </div>
          <div>
            <Label>Traduzir para:
            </Label>
            <Select value={targetLang} onChange={(event)=>{
              setTargetLang(event.target.value)
            }}>
              <option value="en">English</option>
              <option value="es">Spanis</option>
              <option value="fr">French</option>
              <option value="ge">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>

            </Select>
          </div>

          <Input type="text" value={text} onChange={(event)=>{setText(event.target.value)}} placeholder='Insira o texto que deseja traduzir'/>

          <Button onClick={translateText}>Translate</Button>
          {translatedText && <TranslatedText style={{marginTop: '10px', textAlign: 'center', border: 'solid, pink', padding: '10px', textDecoration: 'underline'}}>{translatedText}</TranslatedText>}
      </Container>
    </>
  )
}

export default LanguageTranslator
import React from 'react';
import {Switch, Button, TextField, FormControlLabel} from '@material-ui/core';
import { useState } from 'react';

function FormularioCadastro({onSubmit}) {
    const [nome, setNome] = useState("")
    const [Sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)
    const [erros, setErros] = useState({cpf:{valido: false, texto: ""}})

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            alert("ENVIADO")
            onSubmit({nome, Sobrenome, cpf, novidades, promocoes})
        }}>
            <TextField 
            value = {nome}
            onChange={event => {
                setNome(event.target.value)
            }} id="Nome" label="Nome" variant="outlined" fullWidth margin="normal" />

            <TextField 
            value = {Sobrenome}
            onChange={event => {
                setSobrenome(event.target.value)
            }} id="Sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            
            <TextField 
            value = {cpf}
            onChange={event => {
                setCpf(event.target.value)
            }} 
            onBlur={(event) => {
                setErros({cpf:{valido:true, texto:"CPF DEVE TER 11 DIGITOS!"}})
            }} error={erros.cpf.valido} helperText={erros.cpf.texto} id="CPF" label="Cpf" variant="outlined" fullWidth margin="normal" />
            
            <FormControlLabel label="Promocoes" control={<Switch 
            checked={promocoes}
            onChange={(event) => {
                setPromocoes(event.target.checked)
            }} name="promocoes" color="primary"/>}/>
            
            <FormControlLabel label="Novidades" control={<Switch 
            checked={novidades} onChange={(event) => {
                setNovidades(event.target.checked)
            }} name="novidades" color="primary"/>}/>

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro
import React,{Component} from "react"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import {Container, Typography} from "@material-ui/core"

class App extends Component{
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">Formulario de Cadastro</Typography>
        <FormularioCadastro onSubmit={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {
      valido:true,
      texto: "CPF DEVE TER 11 DIGITOS"
    }
  }
  else {
    return {
      valido:false,
      texto: ""
    }
  }
}

export default App;

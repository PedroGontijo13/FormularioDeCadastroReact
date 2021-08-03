import React,{Component} from "react"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import {Container, Typography} from "@material-ui/core"

class App extends Component{
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">Formulario de Cadastro</Typography>
        <FormularioCadastro onSubmit={aoEnviarForm}/>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;

import { useState } from "react"
import { styled } from "styled-components";

export default function SignUp(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [passwordConfirmation, setPasswordConfirmation]=useState('');
    const [name, setName]=useState('');
    const [cpf, setCpf]=useState();

    async function submit(e){
        e.preventDefault();
    }


    return(
        <Form onSubmit={submit}>
            <Title>Cadastro</Title>
            <Input
                placeholder="Email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Input
                placeholder="Nome"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Input
                placeholder="CPF"
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
            />
            <Input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />  
            <Input
                placeholder="Confirme sua senha"
                type="password"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
            />
            <Button type="submit">Cadastrar</Button>
            <Login>Já tem cadastro? Faça login!</Login>
        </Form>
    )
}

const Form =styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Input=styled.input`
    margin-bottom: 5px;
    width: 300px;
    height: 25px;
    padding: 5px;
    font-size: 18px;
`;

const Title=styled.div`
    font-size:30px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const Button=styled.button`
    border: 0.5px solid #848080;
    margin-top: 20px;
`;

const Login=styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;
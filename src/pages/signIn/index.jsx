import { useState } from "react"
import { styled } from "styled-components";

export default function SignIn(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    async function submit(e){
        e.preventDefault();
    }


    return(
        <Form onSubmit={submit}>
            <Title>Login</Title>
            <Input
                placeholder="Email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
            <Cadastro>Ainda não tem cadastro? Cadastre-se agora!</Cadastro>
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

const Cadastro=styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;
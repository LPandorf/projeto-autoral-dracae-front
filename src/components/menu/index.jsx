import { styled } from "styled-components";
import {FaUser} from "react-icons/fa";

export default function Menu(){

    return (
        <Wrapper>
            <Container>
                <Left>
                    coleções e tals
                </Left>
                <Login>
                    <FaUser fontSize={30}/>
                    <Margin20/>
                    <button>Login</button>
                    <Margin5/>
                    <button>Cadastro</button>
                </Login>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 200px;
    width: 100vw;
    background-color: white;
    border-bottom: 1px solid black;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 20px 10px 20px;
    padding-top: 10px;
`;

const Left = styled.div``;

const Login = styled.div`
    height: 190px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`;

const Margin5 = styled.div`
    margin-top: 5px;
`;

const Margin20 = styled.div`
    margin-top: 20px;
`;
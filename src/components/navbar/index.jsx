import logo from "../../assets/logo/logo.png";
import { styled } from "styled-components";
import { GrMenu } from "react-icons/gr";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useState } from "react";
import Menu from "../menu";

export default function Navbar(){
   
    /* const [menu, setMenu] = useState(false); */
    return (
        <Wrapper>
            <Bar>
                <Left>
                    <GrMenu fontSize={30} /* onClick={setMenu(!menu)} *//>
                </Left>

                <>
                    <Logo src={logo}/>
                </>

                <Right>
                    <BsFillBasket2Fill fontSize={30}/>
                </Right>
            </Bar>{/* 
            {menu? <></>:<Menu/>} */}
            <Menu/>
        </Wrapper>
    );
}

const Logo=styled.img`
    height: 64px;
`;

const Bar=styled.div`
    height: 60px;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
`;

const Left=styled.div`
    margin-left: 20px;
`;

const Right=styled.div`
    margin-right: 20px;
`;

const Wrapper=styled.div`
`;
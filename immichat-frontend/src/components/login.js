import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AuthenticationContext from "../context/AuthenticationContext";
import "./formStuff.css";
import { setToken } from "../utils/http";

const move = keyframes`
0%{
    opacity:0;

}
95%{
    opacity:1;

}

`;
const BackgroundBox = styled.div`
  background-color: #50c878;
  height: 60vh;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15rem auto;

  position: relative;
  border-radius: 23px;
  border: 1px solid #053271;

  .text1 {
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) =>
      props.clicked ? "translateX(0)" : "translateX(100%)"};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
  }

  .text2 {
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;

    transform: ${(props) =>
      props.clicked ? "translateX(-100%)" : "translateX(0%)"};
    transition: transform 1s ease-in-out;
  }

  .signin {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "-600" : "500")};
    transform: ${(props) => (props.clicked ? "none" : "translateX(-50%)")};
    transition: all 1s;
  }
  .signup {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "500" : "-500")};
    transform: ${(props) => (props.clicked ? "translateX(50%)" : "none")};
    transition: all 1s;
  }
`;

const Box1 = styled.div`
  background-color: #ffffff;
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  z-index: 600;
  transform: ${(props) =>
    props.clicked ? "translateX(-122%)" : "translateX(0%)"};
  transition: transform 1s;

  border-radius: ${(props) =>
    props.clicked ? "23px 0 0 23px" : "0 23px 23px 0"};
`;

const Form = styled.form`
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;
  font-family: "Courier New", monospace;

  /* z-index: 100; */
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;

  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;

  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;

  box-shadow: 0 7px #999;

  &:hover {
    background-color: #1b1b1b;
  }
  &:active {
    background-color: black;

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const ButtonAnimate = styled.button`
  position: absolute;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  top: 70%;
  border: none;
  cursor: pointer;

  right: ${(props) => (props.clicked ? "52%" : "42%")};

  transform: ${(props) => (props.clicked ? "rotate(360deg)" : "rotate(0)")};

  transition: all 1.5s;
  background-color: transparent;

  &::before {
    content: "😜";
    font-size: 4rem;
  }

  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  position: absolute;
  z-index: 1000;
  font-size: 2.7rem;
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: "Brush Script MT", cursive;

  .attention {
    font-size: 2.5rem;
    position: relative;
    margin-top: 2rem;
  }

  .attention-icon {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    top: 100%;
    font-size: 5rem;
  }
`;

function LogInForm(){
  const [click, setClick] = useState(false);
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  const [signinMessage, setSigninMessage] = React.useState(null);
  const { setUser } = React.useContext(AuthenticationContext);

  const handleSignInForm = (e) => {
    e.preventDefault();
    setSigninForm({
      ...signinForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => setClick(!click);

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinForm),
    });
    const data = await response.json();
    setSigninMessage(data.message);

    if (data.token) {
      setToken(data.token);
      setUser(data.user);
    }
    window.localStorage.setItem("refreshToken", data.refreshToken);
  };

  return(
    <>
    {" "}
    <BackgroundBox clicked={click}>
    <ButtonAnimate clicked={click} onClick={handleClick} />
    <Form className="signin" onSubmit={handleLogin}>
        <Title>Sign In</Title>
        <Input
            type="email"
            name="email"
            id="emailId1"
            placeholder="Email"
            value={signinForm.email}
            onChange={handleSignInForm}
        />
        <Input
            type="password"
            name="password"
            id="passwordId1"
            placeholder="Password"
            value={signinForm.password}
            onChange={handleSignInForm}
        />
        <Link to='/login'>
            <b>{signinMessage || "Forgot Your Password?"}</b>
        </Link>
        <Button>Sign In</Button>
        </Form>
        <Text className="text1" clicked={click}>
          <h1>Welcome!</h1>
          Don't have an account?
          <br />
          <span className="attention">Click on Emoji</span>
          <span className="attention-icon">⤶</span>
        </Text>

        <Box1 clicked={click} />
      </BackgroundBox>
      </>
  );
} 

export default LogInForm;
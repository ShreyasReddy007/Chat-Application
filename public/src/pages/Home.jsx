import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to   { opacity: 1; transform: translateY(0);}
`;

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #1a1a2e 10%, #161b33 90%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeBox = styled.div`
  background: rgba(20, 20, 40, 0.96);
  border-radius: 2rem;
  box-shadow: 0 12px 42px #4e0eff55, 0 1.5px 0 #9a86f390;
  padding: 3rem 4rem 2.5rem 4rem;
  text-align: center;
  min-width: 330px;
  animation: ${fadeIn} 1s;
`;

const AppLogo = styled.img`
  width: 4.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 2.4rem;
  margin-bottom: 0.7rem;
  text-shadow: 0 2px 10px #9a86f3;
`;

const SubTitle = styled.h3`
  color: #9a86f3;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const RedirectText = styled.div`
  color: #d1d1d1;
  margin-top: 1.6rem;
  font-size: 1.07rem;
  letter-spacing: 1px;
  opacity: 0.9;
`;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const user = localStorage.getItem("chat-app-user");
      if (user) {
        navigate("/chat");
      } else {
        navigate("/register");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <HomeContainer>
      <WelcomeBox>
        <AppLogo src={Logo} alt="PingPal Logo" />
        <Title>Welcome to PingPal</Title>
        <SubTitle>Connect. Chat. Enjoy!</SubTitle>
        <RedirectText>Redirecting...</RedirectText>
      </WelcomeBox>
    </HomeContainer>
  );
};

export default Home;

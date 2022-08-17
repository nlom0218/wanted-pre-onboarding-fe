import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import router from "../router";

const Container = styled.div`
  width: 260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  div {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
  }
  button {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 10px;
    background-color: #e5a852;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(router.signin);
  };
  return (
    <Container>
      <div>Wanted Pre Onboarding FE 🚀</div>
      <button onClick={onClickBtn}>Go to Sign In</button>
    </Container>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  div {
    margin-bottom: 20px;
  }
  button {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 10px 60px;
    background-color: #e5a852;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <Container>
      <div>Wanted Pre Onboarding FE</div>
      <button>Go to Sign In</button>
    </Container>
  );
};

export default Home;

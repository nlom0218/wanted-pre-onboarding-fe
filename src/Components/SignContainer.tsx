import styled from "styled-components";

export default styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sign_title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .sign_contents {
    color: #2b2b2b;
    font-size: 14px;
  }

  a {
    margin-left: 5px;
    text-decoration: none;
    font-weight: 600;
    color: black;
  }
`;

import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 40px;
  color: #4a443a;
  cursor: pointer;
`;

const Signout = () => {
  return (
    <Container>
      <FaSignOutAlt />
    </Container>
  );
};

export default Signout;

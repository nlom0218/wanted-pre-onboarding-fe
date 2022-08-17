import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import router from "../router";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 40px;
  color: #4a443a;
  cursor: pointer;
`;

const Signout = () => {
  const navigate = useNavigate();
  const onClickSignout = () => {
    localStorage.removeItem("token");
    navigate(router.signin);
  };
  return (
    <Container onClick={onClickSignout}>
      <FaSignOutAlt />
    </Container>
  );
};

export default Signout;

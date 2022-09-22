import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

const Login = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LoginButton type="button" onClick={handleOpen}>
        Login
      </LoginButton>
      <LoginModal open={open} onClose={handleClose}>
        <Form>
          <FormItem>
            <label for="loginID">Login ID:</label>
            <input
              type="text"
              placeholder="Enter login ID"
              name="loginID"
              id="loginID"
              required
            />
            <label for="password">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              id="password"
              required
            />
            <button type="submit">Login</button>
          </FormItem>
        </Form>
        <CloseIcon />
      </LoginModal>
    </>
  );
};

const LoginButton = styled.button`
  padding: 1.5rem 3rem;
  background-color: #34495e;
  color: white;
  font-size: 1.25rem;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2c3e50;
  }
`;

const LoginModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 650px;
  height: 650px;
  border-radius: 16px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Login;

import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  min-width: 220px;
  padding: 0.9rem 28px;
  display: inline-block;
  background-color: ${(props) => (props.primary ? "none" : "#747d8c")};
  font-size: 0.7rem;
  font-weight: 300;
  color: ${(props) => (props.primary ? "#747d8c" : "#fff")};
  line-height: 1.5;
  letter-spacing: 2.4px;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #747d8c;
  cursor: pointer;
  user-select: none;
  z-index: 1;

  &:hover {
    color: ${(props) => (props.primary ? "#fff" : "#747d8c")};
    transition: color 0.2s linear;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${(props) => (props.primary ? "#747d8c" : "#fff")};
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    z-index: -1;
  }

  &:hover::before {
    top: 0;
    right: 0;
    height: 100%;
  }
`;

import styled from "styled-components";

interface Props {
  primary?: boolean;
}

export const ActionButton = styled.button<Props>`
  position: relative;
  padding: 0.9rem 28px;
  min-width: 220px;
  background-color: ${(props) => (props.primary ? "#ffffff" : "#747d8c")};
  font-size: 0.7rem;
  font-weight: 300;
  color: ${(props) => (props.primary ? "#747d8c" : "#ffffff")};
  line-height: 1.5;
  letter-spacing: 2.4px;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #747d8c;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: ${(props) => (props.primary ? "#747d8c" : "#ffffff")};
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    z-index: -1;
  }

  &:hover {
    color: ${(props) => (props.primary ? "#ffffff" : "#747d8c")};
  }

  &:hover::before {
    top: 0;
    right: 0;
    height: 100%;
  }
`;

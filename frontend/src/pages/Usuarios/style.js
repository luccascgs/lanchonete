import styled from "styled-components";
import { Link } from "react-router-dom";
export const UsuarioContainer = styled.div`
  margin-top: 20px;
  & :first-child {
    font-weight: 900;
  }
  div {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-around;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
  div :nth-child(1) {
    width: 2rem;
  }
  div :nth-child(2) {
    width: 30%;
  }
  div :nth-child(3),
  div :nth-child(4),
  div :nth-child(5) {
    width: 3rem;
  }
  span {
    padding: 5px 0;
  }
`;
export const NovoUsuario = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;

import styled from "styled-components";

export const LoginStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 20px;

  & > article {
    max-width: 452px;
    width: 100%;
  }

  @media(min-width: 875px) {
    flex-direction: row-reverse;
    gap: 78px;
  }
`
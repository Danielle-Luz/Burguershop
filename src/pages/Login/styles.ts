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

  & > p {
    max-width: 328px;
    margin: 0 auto;
    width: 100%;
  }
  
  form > p {
    text-align: center;
  }

  @media(min-width: 875px) {
    flex-direction: row-reverse;
    gap: 78px;

    & > article:nth-child(1) {
      max-width: 377px;
      width: 100%;
    }
  }
`
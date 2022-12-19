import styled from "styled-components";

export const StyledSiteInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 377px;
  width: 100%;

  & > img:nth-of-type(1) {
    max-width: 230px;
    min-width: 100px;
    width: 100%;
  }

  & > img:nth-of-type(2) {
      width: 181px;
      display: none;
  }
  
  @media(min-width: 875px) {
    & > img:nth-of-type(2) {
      display: block;
    }

    max-width: 377px;
    width: 100%;
  }

  article {
    align-items: center;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border: 1px solid ${({theme}) => theme.colors.gray[2]};
    border-radius: ${({theme}) => theme.radius[0]};
    display: flex;
    gap: 20px;
    padding: 13px 23px;

    div {
      align-items: center;
      background-color: ${({theme}) => theme.colors.brand.secondary[2]};
      border-radius: ${({theme}) => theme.radius[0]};
      display: flex;
      justify-content: center;
      padding: 16px 20px;
    }

    strong {
      color: ${({theme}) => theme.colors.gray[0]};
    }
  }
`
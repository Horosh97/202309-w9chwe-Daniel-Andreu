import styled from "styled-components";

const PageStyled = styled.div`
  margin: 20px 16px;
  .main-heading {
    margin: 16px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkColor};
    text-shadow: 0.1px 0.1px 3px ${({ theme }) => theme.colors.secondaryColor};
  }
`;
export default PageStyled;

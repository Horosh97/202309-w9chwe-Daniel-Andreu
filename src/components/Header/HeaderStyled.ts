import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  height: 96px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  box-shadow: 0 1px 25px ${({ theme }) => theme.colors.darkColor};
  .header {
    &__title {
      margin: 10px;
      font-family: ${({ theme }) => theme.typography.fontFamily};
      color: ${({ theme }) => theme.colors.lightColor};
      text-shadow: 0.1px 0.1px 10px
        ${({ theme }) => theme.colors.secondaryColor};
      text-transform: capitalize;
      font-weight: 600;
      font-size: 2rem;
    }
  }
`;

export default HeaderStyled;

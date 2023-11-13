import styled from "styled-components";

const UserFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .user-form {
    &__block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__label {
      color: ${({ theme }) => theme.colors.darkColor};
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    &__input {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 1px 3px ${({ theme }) => theme.colors.darkColor};
    }

    &__button {
      padding: 16px;
      background-color: ${({ theme }) => theme.colors.mainColor};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 1px 3px ${({ theme }) => theme.colors.darkColor};
    }
  }
`;
export default UserFormStyled;

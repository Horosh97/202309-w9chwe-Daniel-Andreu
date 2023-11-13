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
      padding-top: 10px;
      padding-bottom: 10px;
      color: ${({ theme }) => theme.colors.mainColor};
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }
`;
export default UserFormStyled;

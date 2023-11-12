import styled from "styled-components";

const UserCardStyled = styled.article`
  display: flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 25px;
  box-shadow: 0 1px 25px ${({ theme }) => theme.colors.darkColor};
  .user {
    &__left-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 16px;
      max-width: 40%;
      min-width: 40%;
      align-items: center;
      text-align: center;
    }

    &__right-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 16px;
      max-width: 60%;
      min-width: 60%;
      font-size: 3cqw;
    }

    &__image {
      aspect-ratio: 1/1;
      max-width: 30cqw;
      height: auto;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 1px 10px ${({ theme }) => theme.colors.darkColor};
    }

    &__name {
      font-size: 5cqw;
      color: ${({ theme }) => theme.colors.lightColor};
      text-shadow: 0.1px 0.1px 5px ${({ theme }) => theme.colors.secondaryColor};
    }

    &__username {
      font-size: 3cqw;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }

    &__state {
      //
    }

    &__state-title {
      color: ${({ theme }) => theme.colors.lightColor};
      text-shadow: 0.1px 0.1px 5px ${({ theme }) => theme.colors.secondaryColor};
    }

    &__state-info {
      color: ${({ theme }) => theme.colors.darkColor};
    }

    &__interests {
      //
    }

    &__interests-title {
      color: ${({ theme }) => theme.colors.lightColor};
      text-shadow: 0.1px 0.1px 5px ${({ theme }) => theme.colors.secondaryColor};
    }

    &__interests-info {
      color: ${({ theme }) => theme.colors.darkColor};
    }

    &__birthday {
      //
    }

    &__birthday-title {
      color: ${({ theme }) => theme.colors.lightColor};
      text-shadow: 0.1px 0.1px 5px ${({ theme }) => theme.colors.secondaryColor};
    }

    &__birthday-info {
      color: ${({ theme }) => theme.colors.darkColor};
    }
  }
`;
export default UserCardStyled;

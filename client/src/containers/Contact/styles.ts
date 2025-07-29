import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  width: 95%;
  margin: 0 auto;
`;

export const Form = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.75rem;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    span {
      color: red;
      font-size: 0.875rem;
      margin-top: -0.75rem;
    }
  }

  h2,
  h3 {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    user-select: none;
  }
`;

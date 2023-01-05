import styled from 'styled-components'

export const RegisterComponent = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    width: 540px;
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: ${(props) => props.theme['gray-800']};
    border-radius: 6px;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 1rem;
    padding: 16px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-900']};
    color: #fff;
    border: none;
  }

  button {
    display: flex;
    text-align: center;
    padding: 0.75rem;
    background-color: ${(props) => props.theme['green-500']};
    border: none;
    border-radius: 6px;
    color: #fff;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: 0.3s;
  }

  button:hover {
    scale: 1.03;
  }

  svg {
    margin-left: 8px;
  }
`

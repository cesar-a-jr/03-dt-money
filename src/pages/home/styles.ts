import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 100%;
  }
`
export const Buttons = styled.main`
  margin: 2rem;
  button {
    width: 200px;
    border: none;
    padding: 1rem;
    margin: 1rem;
    background-color: #00875f;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    scale: 1.1;
  }
`

import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    border-radius: 6px;
    cursor: pointer;

    transition: 0.5s;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border: 1px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 768px) {
    margin: 4rem auto 0;
  }
`

export const ResponsiveText = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`

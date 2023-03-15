import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 0 auto 0;

  @media (max-width: 768px) {
    max-width: 100vw;
    overflow-y: scroll;
  }
`

export const TransactionsTable = styled.table`
  @media (min-width: 768px) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme['gray-700']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const TransactionsResponsive = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    background: ${(props) => props.theme['gray-700']};
    margin: 12px 0;
    padding: 20px;
    border-radius: 6px;

    h1 {
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const InfoDiv = styled.div`
  color: ${(props) => props.theme['gray-500']};
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
`

import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;

  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  padding: 0 10rem;

  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 700px) {
    padding: 0 3rem;
  }

  @media (max-width: 1340px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const FormContainer = styled.div`
  max-width: 40rem;

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 0.937rem;
    padding: 2.5rem;

    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;

  font-size: 0.875rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`

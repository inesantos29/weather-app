
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

export const FavouritesWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-flow: column wrap;
`

export const Title = styled.h3`
  background-color: rgb(255, 255, 255);
  padding: 0.5rem 2rem;
  border-radius:  3px;
  border: 1px solid rgba(41, 163, 163, 0.6);
  width: 30rem;
  text-align: center;
  margin: 0 auto;
  color: rgb(51,51,51);
`

export const ButtonContainer = styled.div`
  margin: 1rem 0 0;
  display: flex;
  justify-content: center;
`

export const StyledButton = styled(Button)`
  animation: fadeInUp .4s;
`

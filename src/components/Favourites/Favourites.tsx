import { ChangeEvent } from 'react'
import { FavouritesWrapper, Title, ButtonContainer, StyledButton } from './style'

type Props = {
  savedCities: Array<string>
  callBackFromParent: (city: string) => void
}

const Favourites = ({savedCities, callBackFromParent}: Props) => {
  const getWeather = (event: ChangeEvent<HTMLInputElement>) => {
    callBackFromParent(event.target.value);
  }

  let cityElements = savedCities.map((city) => {
    return <StyledButton  size="tiny" value={city} key={`${city}-button`} onClick={getWeather} content={city} />;
  });

  return (
    <FavouritesWrapper>
      <Title>My Favourite Cities</Title>
      <ButtonContainer>
        {cityElements}
      </ButtonContainer>
    </FavouritesWrapper>
  )
}

export default Favourites

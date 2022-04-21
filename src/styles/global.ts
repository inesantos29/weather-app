import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 400 16px Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1rem;
  }

  .SearchBar {
    text-align: center;
    margin: 3rem 0 2rem;
  }

  .SearchBar-input {
    width: 30rem;
  }

  .SearchBar .message {
    width: 20rem;
    margin: 0 auto 2rem;
    animation: fadeInDown 1s;
  }

  @media screen and (max-width: 600px) {
    .SearchBar-input {
      width: 20rem;
      }
    }


  .WeatherBoards,
  .WeatherRight-board,
  .WeatherRight-board > div {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2em;
  }

  .WeatherRight-board > div {
    display: grid;
    grid-template-columns: 8rem 6rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
  }

  .WeatherBoards {
    grid-template-columns: 20rem auto;
    padding: 10px;
    margin: auto;
  }

  .WeatherRight-board {
    width: 45rem;
  }

  .WeatherLeft-board,
  .WeatherRight-board {
    border: 1px solid #28a2a2;
    box-shadow: 0.15rem 0.15rem 0.5rem rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    animation: horizontalFlipIn 1s;
    border-radius: 3px;
    background-color: white;
    align-items: center;
    justify-content: center;
  }

  .WeatherCard-icon-container {
    font-size: 4.5rem;
    margin: 2rem 0 0;
  }

  .WeatherCard-icon {
    margin: 0 0 2rem;
  }

  .WeatherCard-degrees {
    font-size: 6rem;
    margin: 0;
  }

  .WeatherBoards .ui.positive.button {
    background-color: #28a2a2;
  }

  .WeatherCard-detail {
    border-bottom: 1px dotted grey;
    padding: 10px;
    width: 20rem;
  }
  .WeatherCard-detail > div > p {
    font-size: 1.4rem;
  }

`

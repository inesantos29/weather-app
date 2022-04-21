import styled from 'styled-components'
import dynamic  from 'next/dynamic'
import WeatherEngine from '../components/WeatherEngine/WeatherEngine'

const BgImage = dynamic(() => import('../components/BackgroundImage/BGImage'), {
  ssr: false
})

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`

export default function Home() {
  return (
    <>
      <Wrapper>
        <WeatherEngine/>
      </Wrapper>
      <BgImage/>
    </>
  )
}

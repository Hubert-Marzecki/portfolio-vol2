import { useDispatch } from 'react-redux'

import Clock from '../components/clock'
import Counter from '../components/counter'
import { tick } from '../lib/slices/clockSlice'
import useInterval from '../lib/useInterval'
import styled from '@emotion/styled'
import Kivi from '../components/kivi/Kivi'
import Projects from '../components/projectsLanding/Projects'

const IndexPage = () => {



  const CloudBody = styled.div`
  top:0;
    height: 100vh;
    width: 100vw;
    position: fixed;

    @keyframes cloudOne {
    0% {left: 300px;}
    50% {left: 500px;}
    100% {left: 300px;}
  }
  @keyframes cloudTwo {
    0% {left: 600px;}
    50% {left: 900px;}
    100% {left: 600px;}
  }

    .holder{
        position: relative;
        height: 100vh;

        .sun{
            height: 300px;
            width: 300px;
            position: absolute;
            top: -100px;
            left: 400px;
            background-image: url("https://picsum.photos/id/137/300/300");
            opacity: 0.3

        }
        .cloud__one{
            height: 300px;
            width: 500px;
            position: absolute;
            top: 100px;
            background-image: url("https://picsum.photos/id/137/500/300");
            animation: cloudOne 30s infinite ;
            opacity: 0.3
        }

        .cloud__two{
            height: 300px;
            width: 500px;
            position: absolute;
            top: 500px;
            background-image: url("https://picsum.photos/id/137/500/300");
            animation: cloudTwo 40s infinite ;
            opacity: 0.3
        }
    }

`
  return (
    <AppBody>
      <Kivi />
      <Projects />
      <CloudBody>
      <div className="holder">
                <div className="sun"></div>
                <div className="cloud__one"></div>
                <div className="cloud__two"></div>
            </div>
      </CloudBody>
    </AppBody>
  )
}

const AppBody = styled.div`
    height: 300vh;
    position: relative
`

export default IndexPage

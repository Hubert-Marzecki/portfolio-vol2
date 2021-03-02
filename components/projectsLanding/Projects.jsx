
import Image from 'next/image'
import styled from '@emotion/styled'
import { useEffect } from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {changeBgColor} from '../../lib/slices/styleSlice'

export default function Projects() {

    const dispatch = useDispatch();
    const [mouse, setMouse] = useState({x: 0, y:0});
    const [isVisible, setIsVible] = useState(false)

    function handleMouse(e){
      setMouse({x: e.pageX, y: e.pageY})
      console.log(mouse);
    }

    const StyledHaeder = styled.h3`
    position: absolute;
    left: ${mouse.x};
    top: ${mouse.y};
    `
    return (
        <>
        <section className="projects__holder">
        <StyledHaeder > NAME </StyledHaeder>
     
        {isVisible ? <h3 style={{position:'absolute', zIndex:'10', left: mouse.x, top: mouse.y, transition:"all 0.1s ease"}}>NAME</h3> : null}
          <div className="proj" 
          onMouseEnter={() => {setIsVible(true), dispatch(changeBgColor("green"))}}
          onMouseMove={(e) => handleMouse(e)}
          onMouseLeave={() =>  {setIsVible(false), dispatch(changeBgColor("white"))}}
          > 

          <img src="https://picsum.photos/id/137/100/300" className="img" />
          </div>
        </section>
        </>
    )

   
}

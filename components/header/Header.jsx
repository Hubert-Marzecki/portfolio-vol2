
import Image from 'next/image'
import styled from '@emotion/styled'
import { useEffect } from 'react';
import {useState} from 'react';

export default function Header() {

    const [disFromTop, setDisFromTop] = useState(0)

    function handleScroll() {
        setDisFromTop(window.scrollY)
        console.log(disFromTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })





    return (
        <>
        <nav className={disFromTop < 100 ? "header header--visible" : "header header--hidden"}>
            <div className="logo__holder">
                <Image src="/../public/logo.png"
                    alt="da"
                    width={100}
                    height={30}
                    quality={100}
                /> 
            </div>
            <ul className="nav__element">
                <li className="nav__link">Projects </li>  
                <li  className="nav__link">About </li>     
                <li  className="nav__link">Kontakt </li>     
            </ul>
             </nav>
        </>
    )
}

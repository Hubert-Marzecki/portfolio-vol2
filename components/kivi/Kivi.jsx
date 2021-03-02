
import Image from 'next/image'
import styled from '@emotion/styled'
import { useEffect } from 'react';
import {useState} from 'react';

export default function Kivi() {

    const [disFromTop, setDisFromTop] = useState(0)

    return (
        <>
        <main className="main">
            <h1 className="page__title">
            Witam, jestem <br/> Marzec
            </h1>
            <h3 className="subheader">
            Zajmuję się marketingiem internetowym i fotografią
            </h3>
        </main>
        </>
    )
}

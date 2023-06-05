import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SHeader = styled.header`
    display: flex;
    justify-content: center;
    height: 100px;
    align-items: center;
	.logo {
        //position: fixed;
        //left: 50%;
        //bottom: 60px;
        //top: initial;
        //transform: translateX(-50%);
        max-width: 160px;
        display: block;
        @media screen and (min-width: 500px) {
            top: 100px;
            bottom: initial;
        }
        @media screen and (max-width: 500px) {
            max-width: 30%;
        }
        img {
            display: block;
            max-width: 100%;
        }
    }
`;

export default function Header() {
    return <SHeader>
        <Link className={'logo'} to={'/'}>
            <img src={`${process.env.PUBLIC_URL}/img/logo_02.png`} alt='img' />
        </Link>
    </SHeader>
}

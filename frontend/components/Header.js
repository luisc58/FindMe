import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const StyledHeader = styled.nav`
    padding: 0 4rem;
    display:grid;
    align-items: center;
    grid-template-columns: 1fr auto;
`;

const Logo = styled.h1`
    font-size: 2.5rem;
`;

const Links = styled.div` 
    a {
        cursor: pointer;
        font-size: 1em;
        display: inline-block;
        margin:  0 1.4rem;
    }
    `;

class Header extends Component {
    render() {
     return (
     <StyledHeader>
        <Logo>
            <Link href="/">
                <a> FindMe <span>.</span> </a>
            </Link>
        </Logo>
            <Links>
                <Link href="/signup">
                    <a>Sign up</a>
                </Link>
                    <a>Login</a>
            </Links>          
     </StyledHeader>
        );
    }
}

export default Header;

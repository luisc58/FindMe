import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
    black: '#393939',
    green: '#50E3C2',
    maxWidth: '1450px'
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: auto;
    font-size: 1.5rem;
    line-height:1.65;
    max-width: 1450px;
    overflow-x: none;
    font-family: 'Varela Round', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button,a {cursor: pointer;}
  span {
    color: ${theme.green};
  }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />  
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;
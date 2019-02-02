import styled from 'styled-components';


const StyledPage = styled.div``;

const CenterContent = styled.div`
    margin-top: 10rem;
    text-align: center;
    h3 { opacity: 0.7; font-weight: 400;}
    button {
      background: none;
      padding: 0.8rem 2rem;
      border: 2px solid black;
      margin-top: 2rem;
    }
    a { color: #4A90E2;}
    p { font-size: 1.2rem; margin-top: 3rem;}
`;
const Home = props => (
    <StyledPage>
        <CenterContent>
            <h1><span>Find </span>The Rigth Team</h1>
            <h3>A tool to help athletes find their game</h3>
            <button>Get Started</button>   
            <p>Coach, Team? <a href="">Click Here</a></p>
        </CenterContent>
    </StyledPage>
)

export default Home;
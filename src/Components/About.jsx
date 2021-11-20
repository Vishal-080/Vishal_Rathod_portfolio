import styled from "styled-components";
import TechStack from "./TechStack";
import Proficiencies from "./Proficiencies";

const Container = styled.div`
    margin-top: 60px;
    background-color: #3D5A80;
    h1 {
        margin-bottom: 5px;
        color: #E0FBFC;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }

    .top-section {
        padding: 15px;
    }

    .top-section > img {
        width: 150px;
        animation-play-state: running;
    }

    .about {
        padding-bottom: 30px;
    }

    p {
        font-size: 1.1em;
        font-weight: 500;
        color: #E0FBFC;
    }
    .mydiv {
        animation-direction:alternate;
      }
`;

export default function About() {
    return (
        <Container>
            <br />
            <div className="about">
                <h1>About</h1>
                <div className="top-section">
                    <img className="mydiv" src="vishalT.webp" alt="" />
                    <p>
                    Hi I'm Vishal, a Full-Stack Developer, skilled in both front-end and back-end web development.<br/> 
                    Well versed in coding with HTML, CSS, Javascript, React.js and Redux,for the client-side and  <br/> 
                    maintaining databases and infrastructure using Node.js, Express.js & MongoDB on the server-side.
                    </p>
                </div>
            </div>
            <TechStack />
            <Proficiencies />
        </Container>
    );
}

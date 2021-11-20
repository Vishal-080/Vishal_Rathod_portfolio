import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Proj = styled.div`
    margin-top: 80px;
    padding-bottom: 40px;

    .items {
        margin: auto;
        padding: 10px;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 5px;
        color: #5c5b5b;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }
`;

export default function Projects() {
    const data = [
        {
            id: 1,
            title: "Lenskart",
            desc: "Lenskart is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach.",
            demo: null,
            github: "https://github.com/SushanthPS/Lenskart-Clone",
            main: "/lenskart.webp",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
            ],
        },
        {
            id: 2,
            title: "Boat-Lifestyle",
            desc: "BoAt designs and markets a variety of audio-focused consumer electronics including wireless earbuds, wired headphones, wireless speakers, home audio equipment.",
            demo: null,
            github: "https://github.com/SushanthPS/Boat-Lifestyle-Clone",
            main: "/boat.webp",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
                "reactjs.webp",
            ],
        },
    ];
    return (
        <Proj>
            <h1>Projects</h1>

            <div className="items">
                {data.map((el) => (
                    <div key={el.id}>
                        <ProjectItem el={el}></ProjectItem>
                    </div>
                ))}
            </div>
        </Proj>
    );
}

import styled from "styled-components";

const Tech = styled.div`
    padding: 10px 0 30px;
    background-color: #98C1D9;
 
    h1 {
    color: #3D5A80;
    }
    .stacks {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        align-items: center;
        justify-content: center;
    }

    .stack-item {
        width: 120px;
        height: 100px;
        margin: 30px 65px;
        background-color:#E0FBFC;
        // border:1px solid red;
    }

    .logo {
        height: 100%;
        width:95%;
        margin:auto;
    }

    .stack-item > h5 {
        margin-top: 15px;
        color: #3D5A80;
    }
`;

export default function TechStack() {
    const data = [
        { src: "/html.webp", name: "HTML 5" },
        { src: "/css.webp", name: "CSS 3" },
        { src: "/javascript.webp", name: "JAVASCRIPT" },
        { src: "/mongodb.webp", name: "MONGO DB" },
        { src: "/express.webp", name: "EXPRESS JS" },
        { src: "/react1.webp", name: "REACT JS" },
        { src: "/nodejs2.webp", name: "NODE JS" },
        { src: "/redux1.webp", name: "REDUX" },
        { src: "/postman.webp", name: "POSTMAN" },
        { src: "/npm1.webp", name: "NPM" },
    ];
    return (
        <Tech>
            <h1>Tech Stack</h1>
            <div className="stacks">
                {data.map((el, i) => (
                    <div key={i} className="stack-item">
                        <img src={el.src} alt={el.name} className="logo" />
                        <h5>{el.name}</h5>
                    </div>
                ))}
            </div>
            <br />
            <br />
            
        </Tech>
    );
}

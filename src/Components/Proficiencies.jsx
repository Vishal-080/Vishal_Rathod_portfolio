import styled from "styled-components";

const Pro = styled.div`
    padding: 10px 0 70px;
    background-color: #3D5A80;
    margin-bottom: 40px;

    .stacks {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        align-items: center;
        justify-content: center;
    }

    .stack-item {
        width: 220px;
        height: 100px;
        margin: 30px 65px;
    }

    .logo {
        width: 100px;
        height: 100%;
    }

    .stack-item > h5 {
        margin-top: 5px;
        color: #E0FBFC;
    }
`;

export default function Proficiencies() {
    return (
        <Pro>
            <h1>Proficiencies</h1>
            <div className="stacks">
            <div className="stack-item">
                    <img className="logo" src="/frontend.webp" alt="" />
                    <h5>Frontend</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/backend.webp" alt="" />
                    <h5>Backend</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/ds.webp" alt="" />
                    <h5>Data Structures & Algorithms</h5>
                </div>
            </div>
        </Pro>
    );
}

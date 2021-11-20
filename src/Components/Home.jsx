import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #293241;
    justify-content: center;
    margin-top: -20px;

    div {
        font-size: 40px;
        font-weight: 700;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
        }
    }

    .highlight {
        color: #3D5A80;
    }

    img {
        width: 180px;
        margin-bottom: 10px;
        border: 3px solid #E0FBFC;
        border-radius: 50%;
        
        @media only screen and (max-width: 767px) {
            width: 80px;
        }
    }

    .small-text {
        font-size: 30px;

        @media only screen and (max-width: 767px) {
            font-size: 17px;
        }
    }
`;

export default function Home() {
    return (
        <Container className="body">
            <img src="/vishalWhite.webp" alt="" />
            <div>
                Hey there <span>👋</span> I'm {" "}
                <span className="highlight"> Vishal Rathod</span> <br />
                <span className="small-text"> A Full-Stack Web Developer</span>
            </div>
        </Container>
    );
}

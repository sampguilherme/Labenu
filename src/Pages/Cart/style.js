import styled from "styled-components";

export const Main = styled.main`
    section{
        
        h1, hr{
            width: 100%;
        }

        h1 {
            margin-top: 32px;
        }

        hr {
            margin-top: 16px;
            margin-bottom: 16px
        }
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
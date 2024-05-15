import styled from 'styled-components';
import { COLORS } from '../../../Helper/Constants';

export const QrWrapper = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${COLORS.PRIMARY};
    justify-content: center;
    align-items: center;

    .qr {
        min-height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 10px;
        border: 2px solid;
        border-radius: 5px;
        width: 400px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        background-color: ${COLORS.SECONDARY};
    }

    .qr-code {
        min-height: 250px;
        min-width: 250px;
        border: 2px solid;
    }

    .qr-title {
        margin-top: 10px;
        font-weight: bold;
        text-align: center;
        max-width: 250px;
        font-size: 19px;
    }

    .redirection-button {
        background-color: ${COLORS.BUTTON_PRIMARY};
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .line {
        border: 1px solid;
        width: 250px;
        margin: 10px 0px;
    }
        
    .note {
        max-width: 250px;
        margin: 0px 0px 20px 0px;

        .note-title {
            text-align: center;
            margin: 0;
            color: ${COLORS.RED}; 
        }        
    }
`;

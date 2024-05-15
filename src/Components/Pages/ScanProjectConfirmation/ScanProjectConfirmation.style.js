import styled from 'styled-components';
import { COLORS } from '../../../Helper/Constants';

export const ScanProjectConfirmationWrapper = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${COLORS.PRIMARY};
    justify-content: center;
    align-items: center;

    .scanned-confirmation {
        text-align: center;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        border-radius: 5px;
        width: 400px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        background-color: ${COLORS.SECONDARY};

        .text {
            text-align: center;
            color: ${COLORS.GREEN};
            margin: 10px;
        }

        .text-danger {
            margin: 0;
            color: ${COLORS.RED}; 
        }    

        .text-info {
            color: ${COLORS.BUTTON_PRIMARY};
        }
    }

    .scanned-confirmation button {
        background-color: ${COLORS.BUTTON_PRIMARY};
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 320px) {
        .scanned-confirmation {
            width: 250px;
        }
    }
`;

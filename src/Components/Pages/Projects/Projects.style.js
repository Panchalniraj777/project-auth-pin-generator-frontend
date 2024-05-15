import styled from 'styled-components';
import { COLORS } from '../../../Helper/Constants';
import { responsive } from '../../../Helper/UI';


export const ProjectsWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${COLORS.PRIMARY};

    .header {
        text-align: center;
    }

    .placeholder {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
        width: 400px;

        .text-info {
            color: ${COLORS.BUTTON_PRIMARY};
        }
    }

    .project {
        width: 400px;
        overflow: auto;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin: 20px 70px;
        background-color: ${COLORS.SECONDARY};
        border: 2px solid;
        border-radius: 5px;

        ${responsive.MOBILE`
            width: 300px;
            margin: 20px;
        `}

        .project-list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            .project-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                padding: 10px;
                border: 1px solid;
                border-radius: 5px;
                width: 300px;

                .project-details {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                }

                .progress-bar {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
`;

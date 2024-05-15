import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import httpService from '../../../Helper/httpService';
import { QrWrapper } from './QrGenerator.style';
import { Note } from '../../Common/Note/Note';
import { API_END_POINT, STATUS_CODES } from '../../../Helper/Constants';

export const QrGenerator = () => {
    const navigate = useNavigate();
    const [project, setProject] = useState({
        qr: null,
        qrDetail: null,
    });

    const handleProjectNavigation = () => {
        navigate(API_END_POINT.PROJECTS);
    };

    const getGeneratedQr = async () => {
        try {
            const response = await httpService.get(API_END_POINT.GENERATE_QR);

            const { qr = null, qrDetail = null } = response?.data?.data;

            setProject({ qr, qrDetail });
        } catch (error) {
            console.log('TCL ->', error);
            if (error?.response?.status === STATUS_CODES.SUCCESS) {
                alert(error?.response?.data?.message);
            }
        }
    };

    useEffect(() => {
        getGeneratedQr();
    }, []);

    return (
        <QrWrapper>
            <div className="qr">
                <h5>Project Authenticator</h5>
                <img src={project?.qrDetail} className="qr-code" />
                <div className="line" />
                <div className="note">
                    <p className="note-title">Attention!</p>
                    <br />
                    <Note icon={'✅'} description={'Scan the QR code to register project.'} />
                    <br />
                    <Note
                        icon={'✅'}
                        description={
                            "QR scanned? Click 'Projects' button to view register projects."
                        }
                    />
                </div>
                <button className="redirection-button" onClick={handleProjectNavigation}>
                    🚀 Projects
                </button>
            </div>
        </QrWrapper>
    );
};

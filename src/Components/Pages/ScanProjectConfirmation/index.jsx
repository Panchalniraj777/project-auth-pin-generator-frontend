import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import httpService from '../../../Helper/httpService';
import { ScanProjectConfirmationWrapper } from './ScanProjectConfirmation.style';
import { API_END_POINT, STATUS_CODES } from '../../../Helper/Constants';

export const ScanProjectConfirmation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [scanPhase, setScanPhase] = useState('SCANNING');
    const [project, setProject] = useState(null)

    const addProject = async data => {
        try {
            const response = await httpService.post('', data);

            setScanPhase('SCANNED');
            setProject(response?.data?.data || null);
        } catch (error) {
            console.log(error.response);
            if (error?.response) {
                if (error.response.status === STATUS_CODES.NOT_ALLOWED) {
                    setScanPhase('PROJECT_EXIST');
                }
                if (error.response.status === STATUS_CODES.BAD_REQUEST) {
                    setScanPhase('NOT_VALID_QR');
                }
            }
        }
    };

    const handleProjectNavigation = () => {
        navigate(API_END_POINT.PROJECTS);
    };

    const SCAN_PHASE = {
        SCANNING: <h5 className="text-info">Project Scanning...</h5>,
        NOT_VALID_QR: <h5 className="text-danger">Invalid QR.</h5>,
        PROJECT_EXIST: (
            <>
                <h5 className="text-danger">
                    Project Already exist.
                    <br />
                </h5>
                <h5 className="text-danger">Please reload the WEB PORTAL.</h5>
            </>
        ),
        SCANNED: (
            <>
                <h5 className="text">Project Scanned Successfully!</h5>
                <br />
                <h6 className="text-info">
                    Project Title : {project?.title}
                </h6>
                <br />
                <h6 className="text-info">
                    Please click the 'Projects' button in WEB PORTAL to navigate project list page
                    or if you want to visit by mobile then you can click on below button.
                </h6>
                <button className="redirection-button" onClick={handleProjectNavigation}>
                    🚀 Projects
                </button>
            </>
        ),
    };

    useEffect(() => {
        addProject({ qr: id });
    }, [id]);

    return (
        <ScanProjectConfirmationWrapper>
            <div className="scanned-confirmation">{SCAN_PHASE[scanPhase]}</div>
        </ScanProjectConfirmationWrapper>
    );
};

export default ScanProjectConfirmation;

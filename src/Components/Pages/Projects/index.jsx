import React, { useState, useEffect, useCallback } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import httpService from '../../../Helper/httpService';
import { ProjectsWrapper } from './Projects.style';
import { STATUS_CODES, UPDATE_PIN_DURATION } from '../../../Helper/Constants';

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [seconds, setSeconds] = useState(0);

    const updateProjects = async () => {
        try {
            const response = await httpService.put('');

            const list = response?.data?.data || [];
            setProjects(list);
        } catch (error) {
            console.log('TCL ->', error);
            if (error?.response?.status === STATUS_CODES.SUCCESS) {
                alert(error?.response?.data?.message);
            }
        }
    };

    const decrementTimer = useCallback(() => {
        if (seconds < UPDATE_PIN_DURATION) {
            setSeconds(prevSeconds => prevSeconds + 1);
        } else if (seconds === UPDATE_PIN_DURATION) {
            setSeconds(0);
        }
    }, [seconds]);

    useEffect(() => {
        if (!seconds) {
            updateProjects();
        }
    }, [seconds]);

    useEffect(() => {
        const intervalId = setInterval(decrementTimer, 1000);

        return () => clearInterval(intervalId);
    }, [decrementTimer]);

    return (
        <ProjectsWrapper>
            <div className="project">
                <h2 className="header">Projects</h2>
                {projects?.length ? (
                    <div className="project-list">
                        {projects.map(project => (
                            <div key={project._id} className="project-item">
                                <div className="project-details">
                                    <div className="project-title">{project.title}</div>
                                    <div className="project-title">{project.pin}</div>
                                </div>

                                <div className="progress-bar">
                                    <CircularProgressbar
                                        value={seconds}
                                        maxValue={UPDATE_PIN_DURATION}
                                        strokeWidth={50}
                                        styles={buildStyles({
                                            strokeLinecap: 'butt',
                                        })}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="placeholder">
                        <h5 className="text-info">Please scan to register your project.</h5>
                    </div>
                )}
            </div>
        </ProjectsWrapper>
    );
};

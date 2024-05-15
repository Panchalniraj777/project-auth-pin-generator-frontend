import React from 'react';
import { NoteWrapper } from './Note.style';

export const Note = ({ icon, description }) => {
    return (
        <NoteWrapper>
            <p className="note-icon">{icon}</p>
            <p className="description">{description}</p>
        </NoteWrapper>
    );
};

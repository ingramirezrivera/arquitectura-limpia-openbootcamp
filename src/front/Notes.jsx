import React from 'react';

const Notes = ({ notes }) => {
    return (
        <div>
            This is the pending notes list
            <ul className='note-list'>
                {
                    notes.map((note, id)=> <li key={id}>{note.note}</li>)
                }
            </ul>

        </div>
    );
}

export default Notes;

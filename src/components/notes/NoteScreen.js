import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type = "text"
                    placeholder="Some awesome title"
                    className="notes__title_input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happend today"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img 
                        src="https://www.ninoversace.com/wp-content/uploads/landscape-mountains-sky-4843193.jpg"
                        alt="landscape"
                    />
                </div>
            </div>
        </div>
    )
}

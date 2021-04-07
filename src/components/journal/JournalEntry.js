import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Un nuevo diad asdasf asfasfsa asfdfasf a asfasfsaaf
                    afs safa sfaf a.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Mondar</span>
                <h4>28</h4>
            </div>     
        </div>
    )
}

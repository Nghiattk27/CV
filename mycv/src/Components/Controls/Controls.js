import React from 'react';
import './Controls.scss'

function Controls({ setSave }) {
    return (
        <div className='Controls'>
            <button onClick={() => { setSave(true) }}>Lưu</button>
        </div>
    )
}

export default Controls
import React, { useEffect, useRef, useState } from 'react';
import './Text.scss';

function FullName({ save, placeHolder, h2 }) {

    const [fullName, setFullName] = useState("");

    const textareaRef = useRef();

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "0px";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }, [])

    const textAreaOnInput = () => {
        textareaRef.current.style.height = "5px";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }

    const inputHandelChange = (e) => {
        setFullName(e.target.value);
    }

    return (

        <div className='FullName'>
            {
                save === false &&
                <input type='text' onChange={(e) => inputHandelChange(e)}
                    placeholder={placeHolder}
                    onInput={textAreaOnInput}
                />
            }
            {
                save === true &&
                <h2>{h2}{fullName}</h2>
            }
        </div>
    )
}

export default FullName
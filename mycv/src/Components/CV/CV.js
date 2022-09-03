import React, { useEffect } from 'react';
import Text from '../Text/Text';
import Img from '../Img/Img';
import './CV.scss';
import bane from '../../images/bane5.png';
import phone from '../../images/phone.png';
import birthday from '../../images/birthday.png';
import home from '../../images/home.png';
import email from '../../images/email.png';

function CV({ save }) {

    useEffect(() => {

    }, [save])

    return (
        <div className='CV'>
            <div className='personalInfo'>
                <div className='imgBx'>
                    <Img img={bane} />
                    <div className='border'>
                    </div>
                </div>
                <div className='fullNameBx'>
                    <Text save={save} placeHolder="Họ và Tên" />
                </div>
                <div className='jobName'>
                    <Text save={save} placeHolder="Công việc" />
                </div>
                <div className='info'>
                    <div className='li'>
                        <div className='icon'>
                            <Img img={phone} radius="0" />
                        </div>
                        <Text save={save} placeHolder="số điện thoại" h2="sđt: " />
                    </div>
                    <div className='li'>
                        <div className='icon'>
                            <Img img={birthday} radius="0" />
                        </div>
                        <Text save={save} placeHolder="ngày/tháng/năm sinh" h2="ngày sinh: " />
                    </div>
                    <div className='li'>
                        <div className='icon'>
                            <Img img={home} radius="0" />
                        </div>
                        <Text save={save} placeHolder="nơi ở hiện tại" h2="nơi ở: " />
                    </div>
                    <div className='li'>
                        <div className='icon'>
                            <Img img={email} radius="0" />
                        </div>
                        <Text save={save} placeHolder="email liên hệ" h2="email: " />
                    </div>
                </div>
            </div>
            <div className='achievement'>

            </div>
        </div>
    )
}

export default CV
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import WelcomeCard from 'components/WelcomeCard';
import Notify from 'components/Notify';

const Login = () => {
    const navigate = useNavigate();
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) navigate('/dashboard');
    }, [navigate]);

    useEffect(() => {
        if (formData.username !== '' && formData.password !== '') {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }, [formData]);

    const content =
        "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon";

    const onChangeFirstInput = (event) => {
        setFormData({ ...formData, username: event.target.value });
    };

    const onChangeSecondInput = (event) => {
        setFormData({ ...formData, password: event.target.value });
    };

    const onFormSubmit = async (e) => {
        try {
            e.preventDefault();
            if (formData.username === 'admin' && formData.password === 'admin') {
                localStorage.setItem('token', '123456');
                navigate('/dashboard');
            } else {
                setStatus(false);
                setMessage('Wrong Password');
                setVisible(true);
            }
            console.log(formData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Notify onClose={() => setVisible(false)} visible={visible} status={status} message={message} />
            <div className="main flex-center primary-bg-color">
                <WelcomeCard
                    bgColor="#43568E"
                    titleText={content}
                    forgetPass
                    navigateRegister
                    firstInputTitle={'Full Name'}
                    firstInputType={'text'}
                    firstInputPlaceholder={'type your full name'}
                    onFirstInputChange={onChangeFirstInput}
                    onSecondInputChange={onChangeSecondInput}
                    onSubmit={onFormSubmit}
                    secondInputTitle={'Password'}
                    secondInputType={'password'}
                    secondInputPlaceholder={'type your password'}
                    enabled={enabled}
                    buttonTitle={'Login'}
                />
            </div>
        </div>
    );
};

export default Login;

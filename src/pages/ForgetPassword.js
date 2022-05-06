import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import WelcomeCard from 'components/WelcomeCard';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [enabled, setEnabled] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) navigate('/dashboard');
    }, [navigate]);

    useEffect(() => {
        if (formData.email !== '') {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }, [formData]);

    const content =
        "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon";

    const onChangeFirstInput = (event) => {
        setFormData({ ...formData, email: event.target.value });
    };

    const onFormSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(formData);
            navigate('/new-password');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main flex-center primary-bg-color">
            <WelcomeCard
                bgColor="#FFB222"
                titleText={content}
                login
                firstInputTitle={'Email'}
                firstInputType={'email'}
                firstInputPlaceholder={'Type your email'}
                onFirstInputChange={onChangeFirstInput}
                onSubmit={onFormSubmit}
                enabled={enabled}
                buttonTitle={'Send Email Confirmation'}
            />
        </div>
    );
};

export default ForgetPassword;

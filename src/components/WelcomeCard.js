import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { TextIconWhite, DotsGrup, QuoteIcon, ElbowIcon, CircleIcon } from 'assets/svgIcons';

const WelcomeCard = (props) => {
    const navigate = useNavigate();
    const {
        bgColor,
        subtitleText,
        forgetPass,
        navigateRegister,
        navigateLogin,
        firstInputTitle,
        firstInputType,
        firstInputPlaceholder,
        onFirstInputChange,
        secondInputTitle,
        secondInputType,
        secondInputPlaceholder,
        onSecondInputChange,
        enabled,
        buttonTitle,
        onSubmit,
    } = props;
    return (
        <div className="main-card-container">
            <div className="left-card-container" style={{ backgroundColor: bgColor }}>
                <div className="flex-center-center flex-column" style={{ height: '90%' }}>
                    <div className="flex-center-end">
                        <TextIconWhite />
                        <div style={{ marginLeft: 2, marginBottom: 3 }}>
                            <DotsGrup />
                        </div>
                    </div>
                    <div className="flex-column-center mt-80" style={{ width: '85%' }}>
                        <div style={{ marginBottom: 28 }}>
                            <QuoteIcon />
                        </div>
                        <p className="card-subtitle-text">{subtitleText}</p>
                        <div className="flex justify-end mt-30" style={{ marginRight: 30 }}>
                            <ElbowIcon />
                        </div>
                    </div>
                </div>
                {bgColor !== '#43568E' && (
                    <div style={{ position: 'absolute', bottom: 50, left: 10 }}>
                        <CircleIcon />
                    </div>
                )}
            </div>
            <div className="right-card-container">
                <div className="flex-column align-center mt-80" style={{ height: '90%' }}>
                    <div style={{ width: '70%' }}>
                        <div className="card-title-text">
                            Welcome back to
                            <br />
                            CMS-Template
                        </div>
                    </div>
                    <div className="mt-50" style={{ width: '70%' }}>
                        <Form>
                            {firstInputTitle && (
                                <Form.Group className="mb-3">
                                    <Form.Label className="input-title">{firstInputTitle}</Form.Label>
                                    <Form.Control
                                        type={firstInputType}
                                        placeholder={firstInputPlaceholder}
                                        className="text-input-box"
                                        onChange={onFirstInputChange}
                                    />
                                </Form.Group>
                            )}

                            {secondInputTitle && (
                                <Form.Group className="mb-3">
                                    <Form.Label className="input-title">{secondInputTitle}</Form.Label>
                                    <Form.Control
                                        type={secondInputType}
                                        placeholder={secondInputPlaceholder}
                                        className="text-input-box"
                                        onChange={onSecondInputChange}
                                    />
                                </Form.Group>
                            )}

                            {forgetPass && (
                                <div className="card-input-bottom-text" onClick={() => navigate('/forget')}>
                                    Forget password?
                                </div>
                            )}
                            <div className="d-grid mt-4">
                                <Button
                                    variant={enabled === true ? 'primary' : 'secondary'}
                                    disabled={!enabled}
                                    className="button-text"
                                    onClick={onSubmit}
                                >
                                    {buttonTitle}
                                </Button>
                            </div>
                        </Form>
                        {navigateRegister && (
                            <div className="button-bottom-text-container">
                                <div>Don’t have an account?</div>
                                <div className="button-bottom-text-left">Register</div>
                            </div>
                        )}

                        {navigateLogin && (
                            <div className="button-bottom-text-container">
                                <div>Remember your password?</div>
                                <div className="button-bottom-text-left" onClick={() => navigate('/login')}>
                                    Login
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;

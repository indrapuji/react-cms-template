import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { TextIconWhite, DotsGrup, QuoteIcon, ElbowIcon, CircleIcon } from 'assets/svgIcons';

const WelcomeCard = (props) => {
    const navigate = useNavigate();
    const {
        bgColor,
        titleText,
        forgetPass,
        register,
        login,
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
        <div style={{ width: '60vw', height: '90vh', borderRadius: 30, display: 'flex' }}>
            <div
                style={{
                    width: '48%',
                    backgroundColor: bgColor,
                    height: '100%',
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 30,
                    position: 'relative',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90%' }}>
                    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                        <TextIconWhite />
                        <div style={{ marginLeft: 2, marginBottom: 3 }}>
                            <DotsGrup />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80, flexDirection: 'column', width: '85%' }}>
                        <div style={{ marginBottom: 28 }}>
                            <QuoteIcon />
                        </div>
                        <p style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>{titleText}</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30, marginRight: 30 }}>
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
            <div style={{ width: '52%', backgroundColor: 'white', height: '100%', borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90%', marginTop: 80 }}>
                    <div style={{ width: '70%' }}>
                        <p style={{ fontWeight: '700', fontSize: 25, color: '#43568E' }}>
                            Welcome back to
                            <br />
                            BRInvestYuk!
                        </p>
                    </div>
                    <div style={{ width: '70%', marginTop: 50 }}>
                        <Form>
                            {firstInputTitle && (
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: '700', color: '#696F79', fontSize: 14 }}>{firstInputTitle}</Form.Label>
                                    <Form.Control
                                        type={firstInputType}
                                        placeholder={firstInputPlaceholder}
                                        style={{ fontWeight: '400', color: '#546177', fontSize: 14, height: 50 }}
                                        onChange={onFirstInputChange}
                                    />
                                </Form.Group>
                            )}

                            {secondInputTitle && (
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontWeight: '700', color: '#696F79', fontSize: 14 }}>{secondInputTitle}</Form.Label>
                                    <Form.Control
                                        type={secondInputType}
                                        placeholder={secondInputPlaceholder}
                                        style={{ fontWeight: '400', color: '#546177', fontSize: 14, height: 50 }}
                                        onChange={onSecondInputChange}
                                    />
                                </Form.Group>
                            )}

                            {forgetPass && (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        color: '#43568E',
                                        fontWeight: 400,
                                        fontSize: 14,
                                        marginTop: 9,
                                        fontStyle: 'italic',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate('/forget')}
                                >
                                    Forget password?
                                </div>
                            )}
                            <div className="d-grid mt-4">
                                <Button
                                    variant={enabled === true ? 'primary' : 'secondary'}
                                    disabled={!enabled}
                                    style={{ fontSize: 13, fontWeight: '700', height: 50, marginTop: 9 }}
                                    onClick={onSubmit}
                                >
                                    {buttonTitle}
                                </Button>
                            </div>
                        </Form>
                        {register && (
                            <div style={{ fontWeight: 400, fontSize: 14, marginTop: 9, color: '#CCCCCC', display: 'flex', justifyContent: 'center' }}>
                                <div>Don’t have an account?</div>
                                <div style={{ marginLeft: 5, color: '#43568E', fontStyle: 'italic', textDecoration: 'underline', cursor: 'pointer' }}>Register</div>
                            </div>
                        )}

                        {login && (
                            <div style={{ fontWeight: 400, fontSize: 14, marginTop: 9, color: '#CCCCCC', display: 'flex', justifyContent: 'center' }}>
                                <div>Remember your password?</div>
                                <div style={{ marginLeft: 5, color: '#43568E', fontStyle: 'italic', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => navigate('/login')}>
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

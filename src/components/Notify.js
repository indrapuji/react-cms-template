import { Toast, ToastContainer } from 'react-bootstrap';

const Notify = ({ onClose, visible, status, message }) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast onClose={onClose} show={visible} bg={status ? 'success' : 'danger'} delay={3000} autohide>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Notify;

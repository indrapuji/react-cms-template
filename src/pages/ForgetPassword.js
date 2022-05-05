import React, { useEffect, useState } from 'react';
import WelcomeCard from 'components/WelcomeCard';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
   const navigate = useNavigate();
   const [enabled, setEnabled] = useState(false);
   const [formData, setFormData] = useState({
      email: '',
   });

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
      <div
         style={{
            backgroundColor: '#9BD5E3',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
         <WelcomeCard
            bgColor='#FFB222'
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

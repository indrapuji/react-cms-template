import React, { useEffect, useState } from 'react';

import WelcomeCard from 'components/WelcomeCard';

const NewPassword = () => {
   const [enabled, setEnabled] = useState(false);
   const [formData, setFormData] = useState({
      password: '',
      repassword: '',
   });

   useEffect(() => {
      if (formData.password !== '' && formData.repassword !== '' && formData.password === formData.repassword) {
         setEnabled(true);
      } else {
         setEnabled(false);
      }
   }, [formData]);

   const content =
      "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon";

   const onChangeFirstInput = (event) => {
      setFormData({ ...formData, password: event.target.value });
   };

   const onChangeSecondInput = (event) => {
      setFormData({ ...formData, repassword: event.target.value });
   };

   const onFormSubmit = async (e) => {
      try {
         e.preventDefault();
         console.log(formData);
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
            firstInputTitle={'New Password'}
            firstInputType={'password'}
            firstInputPlaceholder={'Type your new password'}
            onFirstInputChange={onChangeFirstInput}
            secondInputTitle={'Confirm Password'}
            secondInputType={'password'}
            secondInputPlaceholder={'Re-type your new password'}
            onSecondInputChange={onChangeSecondInput}
            enabled={enabled}
            onSubmit={onFormSubmit}
            buttonTitle={'Change Password'}
         />
      </div>
   );
};

export default NewPassword;

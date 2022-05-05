import React from 'react';

import { TextIconWhite } from 'assets/svgIcons';

const SideBar = () => {
   return (
      <div style={{ height: '100vh', width: '20vw', backgroundColor: '#FFB222' }}>
         <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30 }}>
            <TextIconWhite />
         </div>
      </div>
   );
};

export default SideBar;

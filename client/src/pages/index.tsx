import React from 'react';
import WButton from '../theme/WButton';

function index() {
  return (
    <div>
      <WButton
        label="Contact us"
        bgcolor="#b80b0a"
        textColor="white"
        width="115px"
        rounded
        function={() => console.log('Button clicked!')}
      />
    </div>
  );
}

export default index;
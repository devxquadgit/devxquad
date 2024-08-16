import React from 'react';
import WButton from '../theme/WButton';
import WTypo from '../theme/WTypo';
import WTag from '@/theme/WTag';
import TwitterIcon from '../assets/twitter.svg';

import Navbar from '@/components/Navbar'
import Layout from '@/components/layout'


function index() {
  return (
    <div>
      <Navbar />
      <Layout />
      {/* <WButton
        label="Contact us"
        bgcolor="#b80b0a"
        textColor="white"
        width="115px"
        rounded
        onClick={() => console.log('Button clicked!')}
      /> */}
      {/* <WTypo label="link" type="arrow-link" url='https://www.google.com' color="red" /> */}
      {/* <div>
        <WTag
          icon={<TwitterIcon width={22} height={22}/>}
          href="https://twitter.com/example" 
          type="circle-md"
          bordered
          clickable
        />
        <WTag
          icon={<TwitterIcon width={22} height={22}/>}
          label="Twitter"
          href="https://twitter.com/example"
          type="pill"
          bordered
        />
      </div> */}
    </div>
  );
}

export default index;
import React from 'react';
import HeaderComponent from './Header'
import ContentComponent from './Content'
import FooterComponent from './Footer'

function Home() {
  let title="Mapdps";
  let navItems=[
  {urlName:'TubeStackLoading',displayName:'Pellet Loading',path:'/TubeStackLoading'},
];

  return (
    <div>
      <HeaderComponent title={title} navItems={navItems}></HeaderComponent>
      <ContentComponent navItems={navItems}></ContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default Home;

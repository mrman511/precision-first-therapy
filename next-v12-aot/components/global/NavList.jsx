
import { useState, useEffect } from 'react';
import { AnimatePresence, motion,useCycle } from 'framer-motion'

import NavItem from './NavItem';

import routeData from '../../utils/data/routeData';
import servicesData from '../../utils/data/servicesData';

export default function NavList({ styles }){
  // const [overParent, toggleOverParent] = useCycle(false, true);
  // const [overChild, toggleOverChild] = useCycle(false, true);
  // const [dropMenu, toggleDropMenu] = useCycle(false, true);

  const navItems = routeData.map((item, i) => <NavItem
    key={ `navItem-${ item.title }` }
    styles={ styles }
    routeData={ item }
    // toggle={ item.title === 'Services' ? toggleOverParent : undefined }
    />
  )
  
  const serviceNavItems = servicesData.map((item, i) => <NavItem 
    key={ `ServiceNavListItem${i}` }
    styles={ styles }
    routeData={ item }
    subMenu={ true }
  />)

  // const handleOver = (e) => {
  //   e.preventDefault()
  //   toggleOverChild();
  // }

  useEffect(() => {
    // console.log('OverParent::', overParent);
    // console.log('OverChild::', overChild);
    // console.log('dropMenu::', dropMenu);

    // if (!overChild){
    //   toggleOverChild();
    // }
    
    // if ( (overParent || overChild) && !DropMenu ){
    //   toggleDropMenu();
    // }
  }, 
  // [overParent, overChild]
  )

  // const handleOverChild = (e) => {
  //   e.preventDefault()
  //   if (toggle){
  //     toggle();
  //   }
  // }

  return(
    <div className={ styles.nav }>
      <ul>
        { navItems }
      </ul>

      <div 
        className={ styles.servicesList } 
        // onMouseOver={(e) => { handleOver(e) }}
      >
        <ul>
          { serviceNavItems }
        </ul>
      </div>
    </div>
  );
}
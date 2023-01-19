
import { useEffect } from 'react';
import { AnimatePresence, motion,useCycle } from 'framer-motion'

import NavItem from './NavItem';

import routeData from '../../utils/data/routeData';
import servicesData from '../../utils/data/servicesData';

export default function NavList({ styles }){
  const [overParent, toggleOverParent] = useCycle(false, true);
  const [overChild, toggleOverChild] = useCycle(false, true);
  const [dropMenu, toggleDropMenu] = useCycle(false, true);

  const handleOver = (e, toggle) => {
    e.preventDefault();
    toggle();
  }

  const handleOut = (e, toggle) =>{
    e.preventDefault();
    toggle();
  }

  const navItems = routeData.map((item, i) => <NavItem
    key={ `navItem-${ item.title }` }
    styles={ styles }
    routeData={ item }
    handleOver={ handleOver }
    handleOut={ handleOut }
    toggle={ item.title === 'Services' ? toggleOverParent : undefined }
    />
  )
  
  const serviceNavItems = servicesData.map((item, i) => <NavItem 
    key={ `ServiceNavListItem${i}` }
    styles={ styles }
    routeData={ item }
    subMenu={ true }
  />)


  useEffect(() => {
    if ((overParent || overChild) && !dropMenu ){
      toggleDropMenu();
    } else if (dropMenu && (!overParent && !overChild)) {
      toggleDropMenu()
    }
  }, 
  [overParent, overChild, dropMenu]
  )

  return(
    <div className={ styles.nav }>
      <ul>
        { navItems }
      </ul>
      <AnimatePresence>
        { dropMenu && <motion.div 
          className={ styles.servicesList } 
          onMouseOver={(e) => { handleOver(e, toggleOverChild) }}
          onMouseOut={(e) =>{ handleOut(e, toggleOverChild) }}
          initial={{ height: 0, }}
          animate={{ height: 'auto',}}
          exit={{ height: 0, }}
        >
          <ul>
            { serviceNavItems }
          </ul>
        </motion.div> }
      </AnimatePresence> 
    </div>
  );
}
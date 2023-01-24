import {motion, AnimatePresence, useCycle} from 'framer-motion';
import { useEffect } from 'react';

import Mcbutton from './Mcbutton';
import NavList from './NavList';
import MobileNavList from './MobileNavList'

export default function Header({ styles, alt }){
  const [mobileMenuOpen, toggleMobileMenuOpen] = useCycle(false, true);
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

  useEffect(() => {
    if ((overParent || overChild) && !dropMenu ){
      toggleDropMenu();
    } else if (dropMenu && (!overParent && !overChild)) {
      toggleDropMenu();
    }
  }, 
  [overParent, overChild, dropMenu]
  );

  return(
    <header className={ [styles.header, (mobileMenuOpen ? styles.fixed : '') ].join(' ')  }>
      <h1 className={styles.title}>
        <span>aot</span>
        services
      </h1>
      <NavList 
        styles={ styles }
        parent={{ over: overParent, toggle: toggleOverParent }}
        child={{ over: overChild, toggle: toggleOverChild }}
        dropMenu={{ menu: dropMenu, toggle: toggleDropMenu }}
        handle={{over: handleOver, out: handleOut}}
      />
      
      <AnimatePresence>
        { mobileMenuOpen && <MobileNavList styles={ styles } />}
      </AnimatePresence>
      <Mcbutton styles={styles} menuOpen={ mobileMenuOpen } toggleMenuOpen={ toggleMobileMenuOpen } />
    </header>
  );
}
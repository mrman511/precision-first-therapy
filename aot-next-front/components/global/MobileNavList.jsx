import {motion, useCycle } from 'framer-motion';

import routeData from "../../utils/data/routeData";
import NavItem from "./NavItem";
// import styles from '../../styles/Home.module.scss';

export default function MobileNavList({ styles }){

  const [serviceMenu, toggleServiceMenu] = useCycle(false, true);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleServiceMenu();
  };

  const navItems = routeData.map((item, i) => <NavItem
    key={ `navItem-${ item.title }` }
    styles={ styles }
    routeData={ item }
    mobile={{
      state: serviceMenu,
      toggleService: handleToggle,
    }}
    />
  );

  return(
    <motion.article className={ styles.mobileNav }
      initial={{ top: '100vh' }}
      animate={{ top: '100px', transition: { duration: .5 } }}
      exit={{ top: '100vh', transition: {duration: .25}}}
    >
      <ul>
        { navItems }
      </ul>
    </motion.article>
  );
}
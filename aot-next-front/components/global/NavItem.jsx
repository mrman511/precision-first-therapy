import { useRouter } from "next/router";

export default function NavItem({ routeData, styles }){

  const router = useRouter();

  const selected = router.pathname === routeData.href ? true : false; 

  console.log(router)

  const handleClick = (e) =>{
    e.preventDefault();
    router.push(routeData.href)
  }

  return(
    <a className={ selected ? styles.selected : '' } href={ routeData.href } onClick={(e) => { handleClick(e) }}>
      <li>{ routeData.title }</li>
    </a>
  );
}
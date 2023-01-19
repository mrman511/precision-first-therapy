import Mcbutton from './Mcbutton';
import NavList from './NavList';

export default function Header({ styles, alt }){


  return(
    <header className={ [styles.header, (alt ? styles.alternate : '' )].join(' ')  }>
      <h1 className={styles.title}>
        <span>aot</span>
        services
      </h1>
      {/* <div className={ styles.nav }>
        <ul>
          <a href="">
            <li>Home</li>
          </a>

          <a href="">
            <li>About Us</li>
          </a>

          <a href="">
            <li>Services</li>
          </a>

          <a href="">
            <li>Contact</li>
          </a>
        </ul>
      </div> */}
      <NavList styles={ styles }/>
      <Mcbutton styles={styles} />
    </header>
  );
}
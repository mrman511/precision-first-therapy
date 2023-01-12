import Mcbutton from './Mcbutton';

export default function Header({ styles, alt }){

  return(
    <header className={ [styles.header, (alt ? styles.alternate : '' )].join(' ')  }>
      <h1 className={styles.title}>
        <span>aot</span>
        services
      </h1>
      <div className={ styles.nav }>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <Mcbutton styles={styles} />
    </header>
  );
}
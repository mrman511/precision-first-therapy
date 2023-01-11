import Mcbutton from './Mcbutton';

export default function Header({ styles, alt }){

  return(
    <header className={ [styles.header, (alt ? styles.alternate : '' )].join(' ')  }>
      <h1>
        <span>aot</span>
        services
      </h1>
      <Mcbutton styles={styles} />
    </header>
  );
}
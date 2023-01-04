import Mcbutton from './Mcbutton';

export default function Header({ styles }){

  return(
    <header className={ styles.header }>
      <h1>
        <span>aot</span>
        services
      </h1>
      <Mcbutton styles={styles} />
    </header>
  );
}
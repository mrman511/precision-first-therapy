import { useRouter } from "next/router";

export default function Footer({ styles }){

  const router = useRouter();

  const handleClick = (e, path) => {
    e.preventDefault();

    router.push({
      pathname: path,
    })
  }

  return (
    <footer className={ styles.footer }>
      <article>
        <div className={ [styles.footerHeader, styles.footerComponent].join(' ') }>
          <h2><span>AOT</span> Services</h2>
          <ul>
            <li><a href="/" onClick={ (e) => { handleClick(e, '/') } }>Home</a></li>
            <li><a href="/about" onClick={ (e) => { handleClick(e, '/about') } }>About Us</a></li>
            <li><a href="/services" onClick={ (e) => { handleClick(e, '/services') } }>Services</a></li>
            <li><a href="/contact" onClick={ (e) => { handleClick(e, '/contact') } }>Contact</a></li>
          </ul>
        </div>

        <div className={ styles.footerComponent }>
          <p>© 2023 Ariana's Occupational Therapy Services</p>
        </div>
      </article>
    </footer>
  );
}
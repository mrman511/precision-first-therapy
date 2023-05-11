import { useRouter } from "next/router";
import Link from "next/link";

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
          <h2>Precision First Therapy</h2>
          <ul>
            <li><Link href="/" onClick={ (e) => { handleClick(e, '/') } }>Home</Link></li>
            <li><Link href="/about" onClick={ (e) => { handleClick(e, '/about') } }>About Us</Link></li>
            <li><Link href="/services" onClick={ (e) => { handleClick(e, '/services') } }>Services</Link></li>
            <li><Link href="/contact" onClick={ (e) => { handleClick(e, '/contact') } }>Contact</Link></li>
          </ul>
        </div>


        <div className={ [styles.info, styles.footerComponent].join(' ') }>
          <p>{`2023 Precision First Therapy Services`}</p>
          <div className={ [ styles.contactInfo].join(' ') }>
            <span><Link href={ `tel:${7787449178}` }>(778) 744-9178</Link></span>
            <span><Link href="malito:ariana.gverzdys@precisionfirsttherapy.com">ariana.gverzdys@precisionfirsttherapy.com</Link></span>
          </div>
        </div>
      </article>
    </footer>
  );
}
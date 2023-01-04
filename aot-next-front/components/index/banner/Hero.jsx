import Image from "next/image";
import Menu from "../../global/Menu";

export default function Hero({ styles }){

  return(
    <section className={ styles.hero }>
      <div className={ styles.imageContainer }>
        <img className={ styles.image } src="../images/banner-Image-purple.png" alt=""/>
      </div>
      
      <Menu styles={ styles } />
    </section>
  );
}
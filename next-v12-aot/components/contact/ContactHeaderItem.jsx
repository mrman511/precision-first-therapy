import Image from "next/image";

export default function ContactHeaderItem({ styles, item }){

  const image = require(`../../public/images/${ item.path }`);

  return(
    <article className={ styles.contactHeaderCard }>
      <div className={ styles.imageContainer }>
        <Image src={ image } alt={ item.title } fill />
      </div>
      <div className={ styles.info }>
        <h4>{ item.title }</h4>
        <p>{ item.description }</p>
      </div>
    </article>
  );
}
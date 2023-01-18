import Image from "next/image";

export default function HighLightItem({ styles, highlight }){

  const posImage = require(`../../../public/images/${highlight.image_path}`);
  const negImage = (highlight.display === 'std' ? require(`../../../public/images/${highlight.negative_image_path}`) : '');

  return(
    <article className={[styles.highlightCard, styles[highlight.display + 'Card'], styles[highlight.id_tag]].join(' ')}>
      <div className={ [styles.highlightImageContainer, (highlight.display === 'std' ? styles.positive : '')].join(' ') }>
        <Image src={ posImage } alt={ highlight.title } fill placeholder="blur" />
      </div>

      { highlight.display === 'std' && <div className={ [styles.highlightImage, styles.negative].join(' ') }>
        <Image src={ negImage } alt={ highlight.title } layout="fill" objectFit="contain" />
      </div>}

      <div className={ [styles.info, styles.positive].join(' ') }>
        <h3>{ highlight.title }</h3>
        <p>{ highlight.positive_info }</p>
      </div>
      <div className={ [styles.info, styles.negative].join(' ') }>
        <h3>{ highlight.title }</h3>
        <p>{ highlight.negative_info }</p>
      </div>
    </article>
  );
}
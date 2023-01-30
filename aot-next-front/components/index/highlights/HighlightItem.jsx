import { motion, AnimatePresence, useCycle, MotionConfig } from "framer-motion";
import { useRouter } from "next/router";

export default function HighLightItem({ styles, highlight, i }){

  const router = useRouter();
  const [showLink, toggleShowLink] = useCycle(false, true);
  const [hover, toggleHover]= useCycle(false, true);


  const handleClick = (e) => {
    e.preventDefault();
    toggleShowLink();
  }

  const handleOver = (e) => {
    e.preventDefault();
    !hover ? toggleHover() : '';
    !showLink ? toggleShowLink() : '';
  }

  const handleOut = (e) => {
    e.preventDefault();
    hover ? toggleHover() : '';
    showLink ? toggleShowLink(): '';
  }

  const handleRouting = () => {
    const path = { pathname: highlight.route_path };
    if (highlight.id_tag !== 'aot' ){
      path.query = { id: highlight.id };
    }
    router.push(path);
  }

  const title = (
    <motion.div 
      className={ styles.motionContainer }
      key={ `highlight-title${i}` }
      initial={{ left: '100%', }}
      animate={{ left: 0, transition: { duration: .35 }}}
      exit={{ left: '-100%', transition: { duration: .35 }}}
    >
      <h3>
        { highlight.title }
      </h3>
    </motion.div>
  );

  const button = (
    <motion.div 
      className={ styles.motionContainer }
      key={ `highlight-button${i}` }
      initial={{ left: '100%', }}
      animate={{ left: 0, transition: { duration: .45 }}}
      exit={{ left: '-100%', transition: { duration: .45 }}}
    >
      <button 
        className={ [styles.btn, styles.btnLg].join(' ') }
        onClick={ () => { handleRouting() } }
      >
          Details
      </button>
    </motion.div>
  );
  
  return(
    <article 
      className={[styles.highlightCard, styles[highlight.id_tag]].join(' ')}
      onMouseOver={(e) => { handleOver(e) }}
      onMouseLeave={(e) => { handleOut(e) }}
    >
      
      <div className={ [styles.titleContainer, styles.wide].join(' ') }>
        <AnimatePresence >
            { !showLink && title }
            { showLink && button }
        </AnimatePresence>
      </div>

      <div className={ styles.mobile } onClick={(e) => { handleClick(e) }}>
        <div className={ styles.titleContainer }>
          <AnimatePresence >
            { !showLink && title }
            { showLink && button }
          </AnimatePresence>
        </div>
      </div>

    </article>
  );
}
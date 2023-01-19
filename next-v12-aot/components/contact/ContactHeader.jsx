import ContactHeaderItem from "./ContactHeaderItem";

import headerItems from '../../utils/data/contactHeader';

export default function ContactHeader({ styles }){

  const parsedHeaderItems = headerItems.map((item)=> <ContactHeaderItem 
    key={ `headerItem-${item.id}` }
    styles={ styles }
    item={ item }
    />
  );

  return(
    <section className={ styles.contactHeader }>
      { parsedHeaderItems }
    </section>
  );
}
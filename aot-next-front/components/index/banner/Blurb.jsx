export default function Blurb({ styles }){

  return(
    <article className={ styles.blurb }>
      <div className={ styles.blurbContainer }>
        <h3>Ariana's Occupational Therapy Services</h3>
        <p>
          AOT Services provides occupational therapy services to individuals residing in the greater Vancouver
          Area. We strive to offer the best occupational therapy (OT) services in British Columbia by using
          evidence-based practice resources and expert consensus when treating.
        </p>
      </div>
    </article>
  );
}
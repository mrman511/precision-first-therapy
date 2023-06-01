export default function RatesList({ styles }){

  return(
    <section className={ styles.ratesList }>
      <article className={ [styles.rate, styles.icbc].join(' ') }>
        <h3>ICBC</h3>
        <p><strong>Assessment: $0</strong></p>
        <p><strong>Treatment: $0</strong></p>
        <p><strong>Travel Time: $0</strong></p>
        <p>We bill direct to ICBC.</p>
      </article>

      <article className={ [styles.rate].join(' ') }>
        <h3>Private Services</h3>
        <p><strong>Initial Assessments: $100/hour</strong></p>
        <p><strong>Treatment Sessions: $100/hour</strong></p>
        <p><strong>Travel Time: $100/hour</strong></p>
        <p>In-person and virtual sessions are available.</p>
      </article>

      <article className={ [styles.rate].join(' ') }>
        <h3>Ergonomic Assessments and Education</h3>
        <p><strong>Assessments: $100/hour</strong></p>
        <p><strong>Follow Up Sessions: $100/hour</strong></p>
        <p><strong>Travel Time: $100/hour</strong></p>
        <p>In-person and virtual sessions are available.</p>
      </article>
    </section>
  );
}


export default function Mcbutton({ styles }){

  return(
    <div className={ styles.mcbuttonContainer }>
      <div className={ styles.mcbutton}>
        <b className={ styles.mcbuttonTop }></b>
        <b className={ styles.mcbuttonMiddle }></b>
        <b className={ styles.mcbuttonBottom }></b>
      </div>
    </div>
  );
}
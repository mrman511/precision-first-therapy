import Image from "next/image";

export default function EmployeeBadge({ styles, path }){
  const badge = require(`../../public/employees/badges/${ path }`);

  return (
    <div className={ styles.imageContainer }>
      <Image src={ badge } fill sizes="120px"/>
    </div>
  );
}
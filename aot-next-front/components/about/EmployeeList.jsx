import { employees } from "../../utils/data/employees";
import Employee from "./Employee";

export default function EmployeeList({ styles }){

  const  parsedEmployees = employees.map((employee, i ) => <Employee 
    key={`Employee-${employee.role}-${i}`}
    styles={ styles }
    employee={ employee }
  />)

  return(
    <section className={ styles.employees }>
      { parsedEmployees }
    </section>
  );
}
import servicesData from "../data/servicesData";

export default function getServiceData(id, setService) {
  const pk = parseInt(id);
  servicesData.forEach(service => {
    if (service.id === pk){
      setService(service);
    }
  })

}

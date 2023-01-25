import servicesData from "../data/servicesData";

export default function getServiceData(id, setService) {
  servicesData.forEach(service => {
    if (service.id === id){
      setService(service);
    }
  })

}

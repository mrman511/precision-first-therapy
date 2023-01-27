import servicesData from "../data/servicesData";

function getServiceData(id, setService) {
  servicesData.forEach(service => {
    if (service.id === id){
      setService(service);
    }
  })
}

module.exports = {
  getServiceData,
}
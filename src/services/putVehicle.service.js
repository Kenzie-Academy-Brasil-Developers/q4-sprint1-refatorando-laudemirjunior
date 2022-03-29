export const putVehicleService = (data) => {
  let { vehicle, company } = data;

  let updatedVehicle = {
    id: vehicle[0].id,
    model: data.body.model,
    brand: data.body.brand,
    year: data.body.year,
    plate: data.body.plate,
    acquisition_date: vehicle[0].acquisition_date,
    updated_date: new Date(),
  };

  let index = company.vehicles.indexOf(vehicle[0]);
  company.vehicles[index] = updatedVehicle;

  return {
    vehicle,
    updatedVehicle,
  };
};

import { v4 as uuidv4 } from "uuid";

export const postVehiclesController = async (req, res) => {
  let newVehicle = {
    ...req.body,
    id: uuidv4(),
    acquisition_date: new Date(),
  };

  let { company } = req;

  company.vehicles.push(newVehicle);

  res.status(201).json({
    message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
    vehicle: newVehicle,
  });
};

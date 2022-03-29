import { putVehicleService } from "../services";

export const putVehiclesController = (req, res) => {
  const updatedVehicle = putVehicleService(req);

  res.status(200).json({ message: "Vehicle updated", vehicle: updatedVehicle });
};

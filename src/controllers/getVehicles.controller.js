export const getVehiclesController = (req, res) => {
  res.status(200).json(req.company.vehicles);
};

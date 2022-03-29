export const verifyDuplicateVehiclePlateMiddleware = (req, res, next) => {
  let { plate } = req.body;

  let vehicle = companies.some((company) =>
    company.vehicles.some((vehicle) => vehicle.plate === plate)
  );

  if (vehicle) {
    return res.status(400).json({ message: "Vehicle already registered" });
  }

  return next();
};

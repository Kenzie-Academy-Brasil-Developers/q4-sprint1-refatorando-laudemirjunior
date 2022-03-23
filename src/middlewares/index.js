import { authenticateCompanyMiddleware } from "./authenticateCompany.middleware";
import { validateMiddleware } from "./validate.middleware";
import { verifyCompanyExistenceMiddleware } from "./verifyCompanyExistence.middleware";
import { verifyDuplicateCnpjMiddleware } from "./verifyDuplicateCnpj.middleware";
import { verifyDuplicateVehiclePlateMiddleware } from "./verifyDuplicateVehiclePlate.middleware";
import { verifyVehicleExistenceMiddleware } from "./verifyVehicleExistence.middleware";

export {
  authenticateCompanyMiddleware,
  validateMiddleware,
  verifyCompanyExistenceMiddleware,
  verifyDuplicateCnpjMiddleware,
  verifyDuplicateVehiclePlateMiddleware,
  verifyVehicleExistenceMiddleware,
};

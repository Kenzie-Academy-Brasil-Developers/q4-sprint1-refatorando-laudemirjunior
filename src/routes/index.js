import { Router } from "express";
import { companySchemaShape, vehicleSchemaShape } from "../shapes";
import {
  authenticateCompanyMiddleware,
  validateMiddleware,
  verifyCompanyExistenceMiddleware,
  verifyDuplicateCnpjMiddleware,
  verifyDuplicateVehiclePlateMiddleware,
  verifyVehicleExistenceMiddleware,
} from "../middlewares";
import {
  registerCompanyController,
  deleteCompanyController,
  deleteVehiclesController,
  getCompanyController,
  getVehiclesController,
  loginCompanyController,
  postVehiclesController,
  putCompanyController,
  putVehiclesController,
} from "../controllers";

const router = Router();

router.post(
  "/register",
  validateMiddleware(companySchemaShape),
  verifyDuplicateCnpjMiddleware,
  registerCompanyController
);

router.post("/login", loginCompanyController);

router.get("/", getCompanyController);

router.put(
  "/:cnpj",
  authenticateCompanyMiddleware,
  verifyCompanyExistenceMiddleware,
  putCompanyController
);

router.delete(
  "/:cnpj",
  authenticateCompanyMiddleware,
  verifyCompanyExistenceMiddleware,
  deleteCompanyController
);

router.post(
  "/:cnpj/vehicles",
  authenticateCompanyMiddleware,
  verifyCompanyExistenceMiddleware,
  verifyDuplicateVehiclePlateMiddleware,
  validateMiddleware(vehicleSchemaShape),
  postVehiclesController
);

router.get(
  "/:cnpj/vehicles",
  authenticateCompanyMiddleware,
  verifyCompanyExistenceMiddleware,
  getVehiclesController
);

router.put(
  "/:cnpj/vehicles/:plate",
  authenticateCompanyMiddleware,
  verifyCompanyExistenceMiddleware,
  verifyVehicleExistenceMiddleware,
  putVehiclesController
);

router.delete(
  "/:cnpj/vehicles/:plate",
  authenticateCompanyMiddleware,
  verifyCompanyExistenceMiddleware,
  verifyVehicleExistenceMiddleware,
  deleteVehiclesController
);

export { router };

import { UserController } from "../controller/UserController";
import { Router } from "express";
import { checkJwt } from "../middlewares/jwt";
import { checkRole } from "../middlewares/role";
import { validateRegister } from "../middlewares/users.validator";

const router = Router();

router.get("/", [checkJwt, checkRole(['admin'])], UserController.getAll);

router.get("/:id", [checkJwt, checkRole(['admin'])], UserController.getById);

router.post("/", validateRegister, UserController.newUser);

router.patch("/:id", validateRegister, [checkJwt], UserController.editUser);

router.delete("/:id", [checkJwt, checkRole(['admin'])], UserController.deleteUser);

router.patch("/change-role/:id", [checkJwt, checkRole(['admin'])], UserController.changeRole);

export default router;
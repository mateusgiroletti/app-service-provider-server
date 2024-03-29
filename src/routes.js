import { Router } from "express";
import multer from "multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import ProviderController from "./app/controllers/ProviderController";
import AppointmentController from "./app/controllers/AppointmentController";
import ScheduleController from "./app/controllers/ScheduleController";
import NotificationController from "./app/controllers/NotificationController";
import AvailableController from "./app/controllers/AvailableController";

import UserStore from "./app/validators/UserStore";
import UserUpdate from "./app/validators/UserUpdate";
import AppointmentStore from "./app/validators/AppointmentStore";
import SessionStore from "./app/validators/SessionStore";

import authMiddleware from "./app/middlewares/auth";

import multerConfig from "./config/multer";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserStore, UserController.store);
routes.post("/sessions", SessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put("/users", UserUpdate, UserController.update);
routes.post("/files", upload.single("file"), FileController.store);
routes.get("/providers", ProviderController.index);
routes.get("/providers/:providerId/available", AvailableController.index);
routes.post("/appointments", AppointmentStore, AppointmentController.store);
routes.get("/appointments", AppointmentController.index);
routes.delete("/appointments/:id", AppointmentController.delete);
routes.get("/schedules", ScheduleController.index);
routes.get("/notifications", NotificationController.index);
routes.put("/notifications/:id", NotificationController.update);

export default routes;

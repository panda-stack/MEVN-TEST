import { ClientController } from "./controllers/client";
import { ProviderController } from "./controllers/provider";

export function RegisterRoutes(app) {
  app.get("/clients", ClientController.getAll);
  app.get("/clients/:id", ClientController.getById);
  app.post("/client", ClientController.create);
  app.put("/clients/:id", ClientController.update);
  app.delete("/clients/:id", ClientController.delete);
  app.get("/providers", ProviderController.getAll);
  app.get("/providers/:id", ProviderController.getById);
  app.post("/provider", ProviderController.create);
  app.put("/providers/:id", ProviderController.update);
  app.delete("/providers/:id", ProviderController.delete);
}

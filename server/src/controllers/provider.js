import {
  createProvider,
  deleteProvider,
  getAllProviders,
  providerById,
  updateProvider,
} from "../db";

export class ProviderController {

  static getById = async (request, response) => {
    try {
      const id = request.params.id;
      const provider = await providerById(id);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static getAll = async (request, response) => {
    try {
      const id = request.params.id;
      const providers = await getAllProviders(id);
      response.status(200).send(providers);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static create = async (request, response) => {
    try {
      const dto = request.body;
      const provider = await createProvider(dto);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static update = async (request, response) => {
    try {
      const id = request.params.id;
      const dto = request.body;
      const provider = await updateProvider(id, dto);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static delete = async (request, response) => {
    try {
      const id = request.params.id;
      const provider = await deleteProvider(id);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };
}

import {
  clientById,
  createClient,
  deleteClient,
  getAllClients,
  updateClient,
} from "../db";

export class ClientController {
  static getAll = async (request, response) => {
    try {
      const clients = await getAllClients();
      response.status(200).send(clients);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static getById = async (request, response) => {
    try {
      const id = request.params.id;
      const client = await clientById(id);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static create = async (request, response) => {
    try {
      const dto = request.body;
      const client = await createClient(dto);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static update = async (request, response) => {
    try {
      const id = request.params.id;
      const dto = request.body;
      const client = await updateClient(id, dto);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  static delete = async (request, response) => {
    try {
      const id = request.params.id;
      const client = await deleteClient(id);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };
}

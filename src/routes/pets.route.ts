import { Router } from 'express';
import PetsController from '../controllers/pets.controller';
import { CreatePetDto } from '../dtos/pets.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class PetsRoute implements Route {
  public path = '/pets';
  public router = Router();
  public petsController = new PetsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.petsController.getPets);
    this.router.get(`${this.path}/:id(\\d+)`, this.petsController.getPetById);
    this.router.post(`${this.path}`, validationMiddleware(CreatePetDto, 'body'), this.petsController.createPet);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreatePetDto, 'body', true), this.petsController.updatePet);
    this.router.delete(`${this.path}/:id(\\d+)`, this.petsController.deletePet);
  }
}

export default PetsRoute;

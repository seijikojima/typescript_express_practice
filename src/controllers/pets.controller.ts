import { NextFunction, Request, Response } from 'express';
import { CreatePetDto } from '../dtos/pets.dto';
import { Pet } from '../interfaces/pets.interface';
import petService from '../services/pets.service';

class PetsController {
  public petService = new petService();

  public getPets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPetsData: Pet[] = await this.petService.findAllPet();

      res.status(200).json({ data: findAllPetsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPetById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const petId = Number(req.params.id);
      const findOnePetData: Pet = await this.petService.findPetById(petId);

      res.status(200).json({ data: findOnePetData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const petData: CreatePetDto = req.body;
      const createPetData: Pet = await this.petService.createPet(petData);

      res.status(201).json({ data: createPetData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const petId = Number(req.params.id);
      const petData: Pet = req.body;
      const updatePetData: Pet[] = await this.petService.updatePet(petId, petData);

      res.status(200).json({ data: updatePetData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const petId = Number(req.params.id);
      const deletePetData: Pet[] = await this.petService.deletePet(petId);

      res.status(200).json({ data: deletePetData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PetsController;

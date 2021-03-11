import bcrypt from 'bcrypt';
import { CreatePetDto } from '../dtos/pets.dto';
import HttpException from '../exceptions/HttpException';
import { Pet } from '../interfaces/pets.interface';
import petModel from '../models/pets.model';
import { isEmpty } from '../utils/util';

class PetService {
  public pets = petModel;

  public async findAllPet(): Promise<Pet[]> {
    const pets: Pet[] = this.pets;
    return pets;
  }

  public async findPetById(petId: number): Promise<Pet> {
    const findPet: Pet = this.pets.find(pet => pet.id === petId);
    if (!findPet) throw new HttpException(409, "You're not pet");

    return findPet;
  }

  public async createPet(petData: CreatePetDto): Promise<Pet> {
    if (isEmpty(petData)) throw new HttpException(400, "You're not petData");

    const findPet: Pet = this.pets.find(pet => pet.name === petData.name);
    if (findPet) throw new HttpException(409, `You're name ${petData.name} already exists`);

    // const hashedPassword = await bcrypt.hash(petData.password, 10);
    const createPetData: Pet = { id: this.pets.length + 1, ...petData, name : "5 ro" };

    return createPetData;
  }

  public async updatePet(petId: number, petData: Pet): Promise<Pet[]> {
    if (isEmpty(petData)) throw new HttpException(400, "You're not petData");

    const findPet: Pet = this.pets.find(pet => pet.id === petId);
    if (!findPet) throw new HttpException(409, "You're not pet");

    // const hashedPassword = await bcrypt.hash(petData.password, 10);
    const updatePetData: Pet[] = this.pets.map((pet: Pet) => {
      if (pet.id === findPet.id) pet = { id: petId, ...petData, name: "6 ro" };
      return pet;
    });

    return updatePetData;
  }

  public async deletePet(petId: number): Promise<Pet[]> {
    const findPet: Pet = this.pets.find(pet => pet.id === petId);
    if (!findPet) throw new HttpException(409, "You're not pet");

    const deletePetData: Pet[] = this.pets.filter(pet => pet.id !== findPet.id);
    return deletePetData;
  }
}

export default PetService;

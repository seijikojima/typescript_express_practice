"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
const pets_model_1 = __importDefault(require("../models/pets.model"));
const util_1 = require("../utils/util");
class PetService {
    constructor() {
        this.pets = pets_model_1.default;
    }
    async findAllPet() {
        const pets = this.pets;
        return pets;
    }
    async findPetById(petId) {
        const findPet = this.pets.find(pet => pet.id === petId);
        if (!findPet)
            throw new HttpException_1.default(409, "You're not pet");
        return findPet;
    }
    async createPet(petData) {
        if (util_1.isEmpty(petData))
            throw new HttpException_1.default(400, "You're not petData");
        const findPet = this.pets.find(pet => pet.name === petData.name);
        if (findPet)
            throw new HttpException_1.default(409, `You're name ${petData.name} already exists`);
        // const hashedPassword = await bcrypt.hash(petData.password, 10);
        const createPetData = Object.assign(Object.assign({ id: this.pets.length + 1 }, petData), { name: "5 ro" });
        return createPetData;
    }
    async updatePet(petId, petData) {
        if (util_1.isEmpty(petData))
            throw new HttpException_1.default(400, "You're not petData");
        const findPet = this.pets.find(pet => pet.id === petId);
        if (!findPet)
            throw new HttpException_1.default(409, "You're not pet");
        // const hashedPassword = await bcrypt.hash(petData.password, 10);
        const updatePetData = this.pets.map((pet) => {
            if (pet.id === findPet.id)
                pet = Object.assign(Object.assign({ id: petId }, petData), { name: "6 ro" });
            return pet;
        });
        return updatePetData;
    }
    async deletePet(petId) {
        const findPet = this.pets.find(pet => pet.id === petId);
        if (!findPet)
            throw new HttpException_1.default(409, "You're not pet");
        const deletePetData = this.pets.filter(pet => pet.id !== findPet.id);
        return deletePetData;
    }
}
exports.default = PetService;
//# sourceMappingURL=pets.service.js.map
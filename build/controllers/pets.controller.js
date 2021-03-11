"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pets_service_1 = __importDefault(require("../services/pets.service"));
class PetsController {
    constructor() {
        this.petService = new pets_service_1.default();
        this.getPets = async (req, res, next) => {
            try {
                const findAllPetsData = await this.petService.findAllPet();
                res.status(200).json({ data: findAllPetsData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getPetById = async (req, res, next) => {
            try {
                const petId = Number(req.params.id);
                const findOnePetData = await this.petService.findPetById(petId);
                res.status(200).json({ data: findOnePetData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createPet = async (req, res, next) => {
            try {
                const petData = req.body;
                const createPetData = await this.petService.createPet(petData);
                res.status(201).json({ data: createPetData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updatePet = async (req, res, next) => {
            try {
                const petId = Number(req.params.id);
                const petData = req.body;
                const updatePetData = await this.petService.updatePet(petId, petData);
                res.status(200).json({ data: updatePetData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deletePet = async (req, res, next) => {
            try {
                const petId = Number(req.params.id);
                const deletePetData = await this.petService.deletePet(petId);
                res.status(200).json({ data: deletePetData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = PetsController;
//# sourceMappingURL=pets.controller.js.map
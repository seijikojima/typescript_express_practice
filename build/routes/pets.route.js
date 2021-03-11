"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pets_controller_1 = __importDefault(require("../controllers/pets.controller"));
const pets_dto_1 = require("../dtos/pets.dto");
const validation_middleware_1 = __importDefault(require("../middlewares/validation.middleware"));
class PetsRoute {
    constructor() {
        this.path = '/pets';
        this.router = express_1.Router();
        this.petsController = new pets_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.petsController.getPets);
        this.router.get(`${this.path}/:id(\\d+)`, this.petsController.getPetById);
        this.router.post(`${this.path}`, validation_middleware_1.default(pets_dto_1.CreatePetDto, 'body'), this.petsController.createPet);
        this.router.put(`${this.path}/:id(\\d+)`, validation_middleware_1.default(pets_dto_1.CreatePetDto, 'body', true), this.petsController.updatePet);
        this.router.delete(`${this.path}/:id(\\d+)`, this.petsController.deletePet);
    }
}
exports.default = PetsRoute;
//# sourceMappingURL=pets.route.js.map
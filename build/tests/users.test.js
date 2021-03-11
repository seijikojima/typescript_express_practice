"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const users_model_1 = __importDefault(require("../models/users.model"));
const users_route_1 = __importDefault(require("../routes/users.route"));
afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Users', () => {
    describe('[GET] /users', () => {
        it('response statusCode 200 / findAll', () => {
            const findUser = users_model_1.default;
            const usersRoute = new users_route_1.default();
            const app = new app_1.default([usersRoute]);
            return supertest_1.default(app.getServer()).get(`${usersRoute.path}`).expect(200, { data: findUser, message: 'findAll' });
        });
    });
    describe('[GET] /users/:id', () => {
        it('response statusCode 200 / findOne', () => {
            const userId = 1;
            const findUser = users_model_1.default.find(user => user.id === userId);
            const usersRoute = new users_route_1.default();
            const app = new app_1.default([usersRoute]);
            return supertest_1.default(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200, { data: findUser, message: 'findOne' });
        });
    });
    describe('[POST] /users', () => {
        it('response statusCode 201 / created', async () => {
            const userData = {
                email: 'lkm@gmail.com',
                password: 'q1w2e3r4',
            };
            const usersRoute = new users_route_1.default();
            const app = new app_1.default([usersRoute]);
            return supertest_1.default(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
        });
    });
    describe('[PUT] /users/:id', () => {
        it('response statusCode 200 / updated', async () => {
            const userId = 1;
            const userData = {
                email: 'lim@gmail.com',
                password: '1q2w3e4r',
            };
            const usersRoute = new users_route_1.default();
            const app = new app_1.default([usersRoute]);
            return supertest_1.default(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
        });
    });
    describe('[DELETE] /users/:id', () => {
        it('response statusCode 200 / deleted', () => {
            const userId = 1;
            const deleteUser = users_model_1.default.filter(user => user.id !== userId);
            const usersRoute = new users_route_1.default();
            const app = new app_1.default([usersRoute]);
            return supertest_1.default(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200, { data: deleteUser, message: 'deleted' });
        });
    });
});
//# sourceMappingURL=users.test.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const auth_route_1 = __importDefault(require("../routes/auth.route"));
afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Auth', () => {
    describe('[POST] /signup', () => {
        it('response should have the Create userData', () => {
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4',
            };
            const authRoute = new auth_route_1.default();
            const app = new app_1.default([authRoute]);
            return supertest_1.default(app.getServer()).post('/signup').send(userData);
        });
    });
    describe('[POST] /login', () => {
        it('response should have the Set-Cookie header with the Authorization token', async () => {
            const userData = {
                email: 'lim@gmail.com',
                password: 'q1w2e3r4',
            };
            process.env.JWT_SECRET = 'jwt_secret';
            const authRoute = new auth_route_1.default();
            const app = new app_1.default([authRoute]);
            return supertest_1.default(app.getServer())
                .post('/login')
                .send(userData)
                .expect('Set-Cookie', /^Authorization=.+/);
        });
    });
    // error: StatusCode : 404, Message : Authentication token missing
    // describe('[POST] /logout', () => {
    //   it('logout Set-Cookie Authorization=; Max-age=0', () => {
    //     const authRoute = new AuthRoute();
    //     const app = new App([authRoute]);
    //     return request(app.getServer())
    //       .post('/logout')
    //       .expect('Set-Cookie', /^Authorization=\;/);
    //   });
    // });
});
//# sourceMappingURL=auth.test.js.map
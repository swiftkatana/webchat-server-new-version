"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./routes/auth/auth.module");
const user_module_1 = require("./routes/user/user.module");
const auth_controller_1 = require("./routes/auth/auth.controller");
const user_controller_1 = require("./routes/user/user.controller");
const roles_guard_1 = require("./guards/roles.guard");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const mongoose_1 = require("@nestjs/mongoose");
const app_gateway_1 = require("./app.gateway");
const relationsip_module_1 = require("./routes/relationsip/relationsip.module");
const chat_controller_1 = require("./routes/chat/chat.controller");
const chat_module_1 = require("./routes/chat/chat.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply().forRoutes(auth_controller_1.AuthController, user_controller_1.UserController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://SwiftKatana:KkctM130211211@swiftkatana.3gw5v.mongodb.net/discof', {
                useNewUrlParser: true,
                useCreateIndex: true,
            }),
            config_1.ConfigModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            relationsip_module_1.RelationsipModule,
            chat_module_1.ChatModule,
        ],
        providers: [
            app_gateway_1.AppGateway,
            { provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard },
            { provide: core_1.APP_GUARD, useClass: roles_guard_1.RolesGuard },
        ],
        controllers: [chat_controller_1.ChatController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
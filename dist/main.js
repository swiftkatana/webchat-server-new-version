"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const OnlineUsers_1 = require("./class/OnlineUsers");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://84.108.77.188:3000',
        credentials: true,
    });
    app.use(helmet());
    app.use(cookieParser());
    const PORT = process.env.PORT || 1029;
    await app.listen(PORT, () => {
        console.log(`server listening on ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
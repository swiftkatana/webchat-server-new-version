import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { APP_GUARD } from '@nestjs/core'
import { AuthModule } from 'routes/auth/auth.module'
import { UserModule } from 'routes/user/user.module'
import { AuthController } from 'routes/auth/auth.controller'
import { UserController } from 'routes/user/user.controller'
import { RolesGuard } from 'guards/roles.guard'
import { JwtAuthGuard } from 'guards/jwt-auth.guard'
import { MongooseModule } from '@nestjs/mongoose'
import { AppGateway } from 'app.gateway'
import { RelationsipModule } from 'routes/relationsip/relationsip.module'
import { ChatController } from 'routes/chat/chat.controller'
import { ChatModule } from 'routes/chat/chat.module'

@Module({
	imports: [
		MongooseModule.forRoot(
			'mongodb+srv://SwiftKatana:KkctM130211211@swiftkatana.3gw5v.mongodb.net/discof',
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
			}
		),
		ConfigModule.forRoot(),
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
		// ServeStaticModule.forRoot({
		// 	rootPath: join(__dirname, '..', 'client/build'),
		// }),

		UserModule,
		AuthModule,
		RelationsipModule,
		ChatModule,
	],
	providers: [
		AppGateway,
		{ provide: APP_GUARD, useClass: JwtAuthGuard },
		{ provide: APP_GUARD, useClass: RolesGuard },
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply().forRoutes(AuthController, UserController, ChatController)
	}
}

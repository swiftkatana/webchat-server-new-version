import { NestFactory } from '@nestjs/core'
import * as helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import OnlineUsers from 'class/OnlineUsers'
async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({
		origin: 'http://84.108.77.188:3000',
		credentials: true,
	})
	app.use(helmet())
	app.use(cookieParser())

	const PORT = process.env.PORT || 1029
	await app.listen(PORT, () => {
		console.log(`server listening on ${PORT}`)
	})
}
bootstrap()

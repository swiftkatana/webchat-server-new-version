import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { LocalStrategy } from 'strategies/local.strategy'
import { PassportModule } from '@nestjs/passport'
import { JWT } from 'strategies/constants'
import { JwtStrategy } from 'strategies/jwt.strategy'

@Module({
	imports: [
		PassportModule,
		UserModule,
		JwtModule.register({
			secret: JWT.secret,
			signOptions: { expiresIn: '1000s' },
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from 'routes/auth/auth.service'
import { IUser } from 'interface/user/user.interface'
import { Request } from 'express'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({ usernameField: 'email', passReqToCallback: true })
	}
	async validate(
		request: Request,
		email: string,
		password: string
	): Promise<IUser> {
		const user = await this.authService.validateUser({
			email,
			password,
		})
		if (!user) {
			throw new UnauthorizedException()
		}
		return user
	}
}

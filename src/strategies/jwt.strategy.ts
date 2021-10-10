import { Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { JWT } from './constants'
import { UserService } from 'routes/user/user.service'
import { IJwtToken } from 'interface/jwt-token.interface'
import { Request } from 'express'
import { COOKIES_KEYS } from '../enums/cookies'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private userService: UserService) {
		super({
			jwtFromRequest: (req: Request) => {
				if (!req || !req.cookies) return null
				return req.cookies[COOKIES_KEYS.BestLifeAtDiscof]?.accessToken
			},
			ignoreExpiration: false,
			secretOrKey: JWT.secret,
			passReqToCallback: true,
		})
	}

	async validate(request: Request, payload: IJwtToken) {
		return await this.userService.findOneById(payload._id, true)
	}
}

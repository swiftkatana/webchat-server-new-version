import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

import * as crypto from 'crypto'
import { JwtService } from '@nestjs/jwt'
import { IUser } from 'interface/user/user.interface'
import { UserService } from '../user/user.service'
import { compare } from 'bcrypt'
import { ISignInParameters } from 'interface/user/user-more.interface'

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
		private userService: UserService
	) {}

	public async validateUser(userData: ISignInParameters): Promise<IUser> {
		const { email, password } = userData
		const user = await this.userService.findOneByEmail(email, false)
		if (!user)
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: 'User  was not found',
					field: 'email',
				},
				HttpStatus.BAD_REQUEST
			)
		const match = await compare(password, user.securityInfo.password)
		if (match) return user
		else {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: 'Wrong password, please try again',
					field: 'password',
				},
				HttpStatus.BAD_REQUEST
			)
		}
	}

	public getRefreshToken(): string {
		return crypto
			.randomBytes(64)
			.toString('base64')
			.replace(/\//g, '_')
			.replace(/\+/g, '-')
	}

	public async createToken(user: IUser) {
		const accessToken = await this.jwtService.signAsync({ _id: user._id })
		const refreshToken = this.getRefreshToken()
		return { refreshToken, accessToken }
	}
}

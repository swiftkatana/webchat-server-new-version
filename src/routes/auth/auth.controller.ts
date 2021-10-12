import {
	Controller,
	Post,
	UseGuards,
	Res,
	Patch,
	Req,
	Body,
} from '@nestjs/common'
import { Response } from 'express'
import { LocalAuthGuard } from 'guards/local-auth.guard'
import { Public } from 'decorators/public.decorator'
import { IGetUserAuthInfoRequest } from 'type/MyRequest'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { COOKIES_KEYS } from '../../enums/cookies'
import { SignUpUserDto } from '../../dtos/user/sign-in-user.dto'
import { JwtAuthGuard } from 'guards/jwt-auth.guard'

@Controller('api/auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private userService: UserService
	) {}

	@Public()
	@Patch()
	async getNewToken(
		@Req() request: IGetUserAuthInfoRequest,
		@Res({ passthrough: true }) response: Response
	) {
		const token = request.cookies[COOKIES_KEYS.BestLifeAtDiscof].refreshToken
		const user = await this.userService.findOneByToken(token, true)
		const tokens = await this.authService.createToken(user)
		user.securityInfo.token = tokens.refreshToken
		await user.save()
		response.cookie(COOKIES_KEYS.BestLifeAtDiscof, tokens, { httpOnly: true })

		return { status: 'success' }
	}

	@Public()
	@Post('register')
	async createUser(
		@Body() signUpUserDto: SignUpUserDto,
		@Res({ passthrough: true }) response: Response
	) {
		const newUser = await this.userService.createUser(signUpUserDto)
		const tokens = await this.authService.createToken(newUser)
		newUser.securityInfo.token = tokens.refreshToken
		await newUser.save()
		response.cookie(COOKIES_KEYS.BestLifeAtDiscof, tokens, { httpOnly: true })

		return { data: newUser, status: 'success' }
	}

	@Public()
	@Post()
	@UseGuards(LocalAuthGuard)
	async signIn(
		@Req() request: IGetUserAuthInfoRequest,
		@Res({ passthrough: true }) response: Response
	) {
		const user = request.user
		const tokens = await this.authService.createToken(user)
		user.securityInfo.token = tokens.refreshToken
		await user.save()
		response.cookie(COOKIES_KEYS.BestLifeAtDiscof, tokens, {
			httpOnly: true,
		})

		return { status: 'success', data: user }
	}

	@Post('logout')
	@UseGuards(JwtAuthGuard)
	async logout(
		@Req() request: IGetUserAuthInfoRequest,
		@Res({ passthrough: true }) response: Response
	) {
		const user = request.user
		user.securityInfo.token =
			response.chunkedEncoding +
			request.user.securityInfo.token +
			request.user.securityInfo.password
		await user.save()
		response.clearCookie(COOKIES_KEYS.BestLifeAtDiscof, { httpOnly: true })
		return { status: 'success' }
	}
}

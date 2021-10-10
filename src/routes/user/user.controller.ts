import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common'
import { SerachUserDto } from 'dtos/user'
import { JwtAuthGuard } from 'guards/jwt-auth.guard'
import { IGetUserAuthInfoRequest } from 'type/MyRequest'

import { UserService } from './user.service'

@Controller('api/user')
@UseGuards(JwtAuthGuard)
export class UserController {
	constructor(private userService: UserService) {}
	@Get()
	async getUser(@Req() req: IGetUserAuthInfoRequest) {
		return {
			data: req.user,
			status: 'success',
		}
	}
	@Get('/search')
	async getSearchUsers(
		@Query() query: SerachUserDto,
		@Req() req: IGetUserAuthInfoRequest
	) {
		const data = await this.userService.serachUserQuery(query.query, req.user._id)
		return { data, status: 'success' }
	}
}

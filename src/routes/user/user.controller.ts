import {
	Body,
	Controller,
	Get,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common'
import { GetUserProfileDto, SerachUserDto } from 'dtos/user'
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

	@Post('/getProfilesData')
	async getProfileData(
		@Req() req: IGetUserAuthInfoRequest,
		@Body() body: GetUserProfileDto
	) {
		const data = await this.userService.findManyByIds(body.usersIds)
		return { data, status: 'success' }
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

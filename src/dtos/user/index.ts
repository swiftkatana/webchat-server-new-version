import { IsArray, isNotEmpty, IsString } from 'class-validator'

export class SerachUserDto {
	@IsString()
	query: string
}

export class GetUserProfileDto {
	@IsArray()
	usersIds: string[]
}

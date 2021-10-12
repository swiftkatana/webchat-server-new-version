import { IsEmail, IsJWT } from 'class-validator'

export class SignInUserDto {
	//TODO: add validation
	@IsEmail()
	email?: string
	password?: string
	@IsJWT()
	token?: string
}
export class SignUpUserDto {
	//TODO: add validation
	@IsEmail()
	email: string
	password: string
	firstName: string
	lastName: string
}

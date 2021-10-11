export class SignInUserDto {
	//TODO: add validation
	email?: string
	password?: string
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

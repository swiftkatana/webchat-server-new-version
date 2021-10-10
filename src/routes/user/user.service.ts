import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserDB, UserDocument } from 'schemas/user/user.schema'
import { ICreateUser } from 'interface/user/user-more.interface'
import { hash } from 'bcrypt'
import { IUser } from 'interface/user/user.interface'
@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserDB.name) private UserModule: Model<UserDocument>
	) {}
	filterUserObject = (show: boolean) =>
		show ? { 'securityInfo.password': 0, 'securityInfo.token': 0 } : {}

	public async serachUserQuery(
		query: string,
		userId: string
	): Promise<UserDocument[]> {
		const filterSeachQuery = [
			{ 'securityInfo.email': { $regex: `${query}`, $options: 'ig' } },
			{ 'personalInfo.firstName': { $regex: `${query}`, $options: 'gi' } },
			{ 'personalInfo.lastName': { $regex: `${query}`, $options: 'gi' } },
		]

		return await this.UserModule.find({
			$or: filterSeachQuery,
			_id: { $ne: userId },
		})
	}
	public async createUser(userDetails: ICreateUser): Promise<IUser> {
		const { firstName, lastName, password, email } = userDetails

		const hashedPassword = await hash(password, 10)
		const newUser = await new this.UserModule({
			securityInfo: {
				email,
				password: hashedPassword,
				token: Date.now().toLocaleString(),
			},
			personalInfo: {
				firstName,
				lastName,
			},
		})
		await newUser.save()

		return newUser as IUser
	}
	async findOneById(
		_id: string,
		getFilterUser: boolean
	): Promise<UserDocument | any> {
		const user = await this.UserModule.findById(
			_id,
			this.filterUserObject(getFilterUser)
		)
		if (!user)
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: 'user not found',
					field: 'user',
				},
				HttpStatus.BAD_REQUEST
			)

		return user
	}

	async findOneByEmail(
		email: string,
		getFilterUser: boolean
	): Promise<UserDocument & any> {
		console.log(email)
		const user = await this.UserModule.findOne(
			{ 'securityInfo.email': email },
			this.filterUserObject(getFilterUser)
		)

		return user
	}

	public async findOneByToken(
		token: string,
		getFilterUser: boolean
	): Promise<UserDocument | any> {
		const user = await this.UserModule.findOne(
			{ 'securityInfo.token': token },
			this.filterUserObject(getFilterUser)
		)

		if (!user)
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: 'user not found',
					field: 'user',
				},
				HttpStatus.BAD_REQUEST
			)

		return user
	}

	public async findByIdAndRemove(id: string): Promise<UserDocument | any> {
		const user = await this.UserModule.findByIdAndDelete(id)

		if (!user)
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: 'user not found',
					field: 'user',
				},
				HttpStatus.BAD_REQUEST
			)

		return user
	}
}

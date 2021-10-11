import {
	Body,
	Controller,
	Get,
	Post,
	Put,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common'
import {
	RelationshipCreateDTO,
	RelationshipGetUserDTO,
	RelationshipUpdateDTO,
} from 'dtos/relationship'
import {
	relationship_Request_types,
	relationship_status,
} from 'enums/relationship/relationship_status'
import {
	relationship_req_types,
	relationship_types,
} from 'enums/relationship/relationship_types'
import { JwtAuthGuard } from 'guards/jwt-auth.guard'
import { RelationshipDocument } from 'schemas/relationship/relationship'
import { IGetUserAuthInfoRequest } from 'type/MyRequest'
import { RelationsipService } from './relationsip.service'

@UseGuards(JwtAuthGuard)
@Controller('api/relationship')
export class RelationsipController {
	constructor(private relationshipService: RelationsipService) {}

	@Get()
	async getRelationsip(
		@Req() req: IGetUserAuthInfoRequest,
		@Query() query: RelationshipGetUserDTO
	) {
		if (query.type === relationship_req_types.ALL) {
			const relationships = await this.relationshipService.getRelationships(
				req.user.id
			)
			return { status: 'success', data: relationships }
		} else {
			console.log('one', query.type)
			return 'dsa'
		}
	}

	@Put()
	async updateRelationship(
		@Req() req: IGetUserAuthInfoRequest,
		@Body() body: RelationshipUpdateDTO
	) {
		const { status, data } = body
		const sendUser = req.user
		let relationship: RelationshipDocument
		console.log(status, data)
		return relationship
	}

	@Post()
	async createRelationship(
		@Req() req: IGetUserAuthInfoRequest,
		@Body() body: RelationshipCreateDTO
	) {
		const { userIds } = body
		const res = await this.relationshipService.createRelationship({
			type: relationship_types.FRIEND,
			users: userIds,
		})
		return { data: res, status: 'success' }
	}
}

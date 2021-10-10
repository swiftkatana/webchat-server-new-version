import {
	Body,
	Controller,
	Get,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common'
import {
	RelationshipCreateDTO,
	RelationshipGetUserDTO,
} from 'dtos/relationship'
import { relationship_Request_types } from 'enums/relationship/relationship_status'
import { relationship_req_types } from 'enums/relationship/relationship_types'
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
	@Post()
	async createRelationship(
		@Req() req: IGetUserAuthInfoRequest,
		@Body() body: RelationshipCreateDTO
	) {
		const { status, type, userId } = body
		const sendUser = req.user
		let relationship: RelationshipDocument
		switch (type) {
			case relationship_Request_types.CREATE:
				relationship = await this.relationshipService.createRelationship({
					status,
					users: [sendUser._id, userId],
				})
				break
			case relationship_Request_types.UPDATE:
				break
			default:
				break
		}
		return relationship
	}
}

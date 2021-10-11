import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RelationsipController } from './relationsip.controller'
import { RelationsipService } from './relationsip.service'
import {
	RelationshipDB,
	RelationshipSchema,
} from 'schemas/relationship/relationship'
import {
	FriendRelationshipDB,
	FriendRelationshipSchema,
} from 'schemas/relationship/friendRelationship'
import {
	GroupRelationshipDB,
	GroupRelationshipSchema,
} from 'schemas/relationship/groupRelationship'

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: RelationshipDB.name,
				schema: RelationshipSchema,
				discriminators: [
					{
						name: FriendRelationshipDB.name,
						schema: FriendRelationshipSchema,
					},
					{
						name: GroupRelationshipDB.name,
						schema: GroupRelationshipSchema,
					},
				],
			},
		]),
	],
	controllers: [RelationsipController],
	providers: [RelationsipService],
})
export class RelationsipModule {}

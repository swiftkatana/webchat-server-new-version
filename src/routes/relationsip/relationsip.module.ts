import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RelationsipController } from './relationsip.controller'
import { RelationsipService } from './relationsip.service'
import {
	RelationshipDB,
	RelationshipSchema,
} from 'schemas/relationship/relationship'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: RelationshipDB.name, schema: RelationshipSchema },
		]),
	],
	controllers: [RelationsipController],
	providers: [RelationsipService],
})
export class RelationsipModule {}

import { Test, TestingModule } from '@nestjs/testing'
import { RelationsipController } from './relationsip.controller'

describe('RelationsipController', () => {
	let controller: RelationsipController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [RelationsipController],
		}).compile()

		controller = module.get<RelationsipController>(RelationsipController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})

import { Test, TestingModule } from '@nestjs/testing'
import { RelationsipService } from './relationsip.service'

describe('RelationsipService', () => {
	let service: RelationsipService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RelationsipService],
		}).compile()

		service = module.get<RelationsipService>(RelationsipService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})

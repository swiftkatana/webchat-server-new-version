import { SetMetadata } from '@nestjs/common'
import userRoles from 'enums/userRoles'
export const ROLES_KEY = 'ROLES'
export const Roles = (...roles: userRoles[]) => SetMetadata(ROLES_KEY, roles)

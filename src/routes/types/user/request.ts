import { defaults } from "@src/constants/misc"
import { atLeastOneDefined } from "@src/library/zod"
import { UserRoles } from "@src/models/User"
import {z} from "zod"


export const registerUserBodySchema = z.object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.nativeEnum(UserRoles).optional(),
    email: z.string().email(),
    password: z.string()
})

export type registerUserBody = z.infer<typeof registerUserBodySchema>

export const registerUserRequestSchema = z.object({
    user: registerUserBodySchema
})

export type registerUserRequest = z.infer<typeof registerUserRequestSchema>


export const editUserBodySchema = registerUserBodySchema.partial().refine((val) => atLeastOneDefined(val), {message: "At least one variable must be supplied"})

export type editUserBody = z.infer<typeof editUserBodySchema>

export const editUserRequestSchema = editUserBodySchema

export type editUserRequest = z.infer<typeof editUserRequestSchema>

export const userHistoryBodySchema = z.object({
    sort: z.enum(defaults.sort as any).optional(),
    page: z.number().default(defaults.page),
    pageSize: z.number().default(defaults.pageSize),
    dateFrom: z.string().datetime(),
    dateTo: z.string().datetime()
})

export type userHistoryBody = z.infer<typeof userHistoryBodySchema>

export const userHistoryRequestSchema = userHistoryBodySchema

export type userHistoryRequest = z.infer<typeof userHistoryRequestSchema>


export const userHistorySummaryBodySchema = z.object({
    sort: z.enum(defaults.sort as any).optional(),
    page: z.number().default(defaults.page),
    pageSize: z.number().default(defaults.pageSize)
})

export type userHistorySummaryBody = z.infer<typeof userHistorySummaryBodySchema>

export const userHistorSummaryRequestSchema = userHistorySummaryBodySchema

export type userHistorSummaryyRequest = z.infer<typeof userHistorSummaryRequestSchema>

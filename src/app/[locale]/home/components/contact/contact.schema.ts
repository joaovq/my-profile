import { z } from "zod"

export const userContactForm = z.object(
    {
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string(),
        description: z.string(),
    }
)

export type userContactEmailFormData = z.infer<typeof userContactForm>
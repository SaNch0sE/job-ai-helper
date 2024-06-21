import { z } from "zod";

const CreateProjectSchema = z.object({
  name: z.string().min(1),

  description: z.string().min(1),

  features: z.string().nullable().optional().transform((val) => val?.length ? val : null),

  techstack: z.string().nullable().optional().transform((val) => val?.length ? val : null),

  links: z.string().nullable().optional().transform((val) => val?.length ? val : null),
});

export default CreateProjectSchema;
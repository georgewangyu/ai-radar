import { z } from "zod";

export const submissionTypes = [
  "submit-paper",
  "request-paper",
  "improve-note",
] as const;

export const visibilityModes = ["public", "private"] as const;

export const paperSubmissionSchema = z.object({
  submissionType: z.enum(submissionTypes),
  visibility: z.enum(visibilityModes).optional().default("public"),
  title: z
    .string()
    .trim()
    .min(4, "Write at least 4 characters for the title.")
    .max(160, "Keep the title under 160 characters."),
  outcome: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters for why this paper fits.")
    .max(1200, "Keep the reason under 1200 characters."),
  notes: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters for the rough notes.")
    .max(2500, "Keep the notes under 2500 characters."),
  context: z.string().trim().max(1000).optional().default(""),
  handle: z.string().trim().max(120).optional().default(""),
  website: z.string().trim().max(0).optional().default(""),
});

export type PaperSubmission = z.infer<typeof paperSubmissionSchema>;


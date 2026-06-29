import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters.")
    .max(100, "Title must not exceed 100 characters."),

  category: z.string().min(1, "Please select a category."),

  budget: z
    .number({
      error: "Budget is required.",
    })
    .positive("Budget must be greater than 0."),

  deadline: z.string().min(1, "Please select a deadline."),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters.")
    .max(2000, "Description must not exceed 2000 characters."),
});

import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters.")
      .max(50, "Name must not exceed 50 characters."),

    email: z.string().email("Please enter a valid email address."),

    role: z.enum(["client", "freelancer"], {
      message: "Please select a role.",
    }),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character.",
      ),

    confirmPassword: z.string().min(1, "Please confirm your password."),

    skills: z.string().optional(),

    bio: z.string().optional(),

    hourlyRate: z.union([z.number(), z.nan()]).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      });
    }

    if (data.role === "freelancer") {
      if (!data.skills?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["skills"],
          message: "Skills are required.",
        });
      }

      if (!data.bio?.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["bio"],
          message: "Bio is required.",
        });
      }

      if (
        data.hourlyRate === undefined ||
        Number.isNaN(data.hourlyRate) ||
        data.hourlyRate <= 0
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["hourlyRate"],
          message: "Hourly rate must be greater than 0.",
        });
      }
    }
  });

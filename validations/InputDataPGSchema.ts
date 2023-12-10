import { z } from "zod";

const InputDataValidationSchema = z.object({
  application_no: z
    .string()
    .optional()
    .refine(
      (string) => {
        if (string === undefined || string.length === 0) {
          return true;
        }

        return string?.length === 10;
      },
      {
        message:
          "Order ID must consist of PRECISELY 10 numeric characters.",
      }
    ),
  app_id: z
    .string()
    .optional()
    .refine(
      (string) => {
        if (string === undefined || string.length === 0) {
          return true;
        }

        return string.endsWith("I101") || string.endsWith("I102");
      },
      {
        message:
          "App ID must contain an 'I' letter followed by '101' or '102'.",
      }
    ),
  nama_nasabah: z
    .string()
    .optional()
    .refine(
      (string) => {
        return string === string?.toUpperCase();
      },
      { message: "Kindly uses capital characters on the client's name." }
    ),
  no_ktp: z
    .string()
    .optional()
    .refine(
      (string) => {
        if (string === undefined || string.length === 0) {
          return true;
        }

        return string.length === 16;
      },
      { message: "No. KTP must consist of 16 numeric characters." }
    ),
});

export default InputDataValidationSchema;

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// shadcn dependencies
import { Button } from "@/components/ui/button";
import CustomFormField, {
  FormFieldType,
} from "@/components/forms/CustomFormField";
import { isValidPhoneNumber } from "react-phone-number-input";
import { toast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";

// form schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "FirstName is required " }).max(50),
  lastName: z.string().min(2, { message: "LastName is required" }).max(50),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  date: z
    .date({ required_error: "Date is required" })
    .refine((date) => date <= new Date(), {
      message: "Date must be in the past",
    }),
});

export function ContributorInfoForm() {
  // form definintion.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "New User Values collected:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div></div>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="firstName"
          label="First Name"
          placeholder="John"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="lastName"
          label="Last name"
          placeholder="Doe"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="address"
          label="Address"
          placeholder="Kigali"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />

        <CustomFormField
          fieldType={FormFieldType.DATE_PICKER}
          control={form.control}
          name="date"
          label="Date of Birth"
          dateFormat="MM/dd/yyyy  -  h:mm aa"
        />

        <div className="flex items-end justify-end">
          <Button className="mt-8" type="submit" size="lg">
            Create User
          </Button>
        </div>
      </form>
    </Form>
  );
}

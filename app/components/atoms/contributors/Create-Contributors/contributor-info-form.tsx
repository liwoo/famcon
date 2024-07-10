import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// shadcn dependencies
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// form schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "FirstName is required " }).max(50),
  lastName: z.string().min(2, { message: "LastName is required" }).max(50),
  phoneNumber: z.number().min(20, { message: "Phone number is out of bound" }),
  address: z.string().min(20),
});

export function ContributorInfoForm() {
  // form definintion.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className={"grid items-start gap-4"}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input id="firstName" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.username?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input id="lastName" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.username?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input id="username" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.username?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
}

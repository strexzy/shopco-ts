import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormDescription,
} from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { useAuth } from "~/context/AuthContext";
import type { AuthCredentials } from "~/types/auth";

const FormLogin = () => {
  const { login } = useAuth();
  const onSubmit = ({ email, password }: AuthCredentials) => {
    login({ email, password });
  };

  const form = useForm<{ email: string; password: string }>({
    mode: "onChange",
  });
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="mail@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full">Sign in</Button>
      </form>
    </Form>
  );
};

export default FormLogin;

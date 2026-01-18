import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  safeAxiosError,
  Input,
} from "~/shared";
import { offersApi } from "~/features";
import { useState } from "react";

const offersSchema = z.object({
  email: z
    .string()
    .trim()
    .min(6, "Email can not be shorter than 6 symbols")
    .max(256, "Email can not be longer than 256 symbols")
    .email("Invalid email format"),
});

const OffersForm = () => {
  const [subscribeError, setSubscribeError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof offersSchema>>({
    resolver: zodResolver(offersSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async ({ email }: z.infer<typeof offersSchema>) => {
    setSubscribeError(null);
    try {
      await offersApi.subscribe(email);
    } catch (error) {
      setSubscribeError(safeAxiosError(error));
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-4 bg-black rounded-t-[20px] p-6 pb-0">
          <h2 className="text-[32px] text-white font-extrabold leading-none">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>
      </div>
      <div className="bg-primary-grey">
        <div className="mx-4 bg-black rounded-b-[20px] p-6 pt-6">
          <Form {...form}>
            <form
              className="flex flex-col gap-3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="bg-white rounded-full placeholder:font-light"
                        placeholder="Enter your email address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-white rounded-full text-black font-light">
                Subscribe to Newsletter
              </Button>
              {subscribeError && (
                <div className="text-red-500 text-sm text-center">
                  {subscribeError}
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default OffersForm;

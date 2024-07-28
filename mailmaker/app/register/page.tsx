"use client";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const registerSchema = z.object({
  firstName: z.string().min(3, { message: "First name at least minumum 3 characters" }).max(100),
  lastName: z.string().min(3, { message: "Last name at least minimum 3 characters" }).max(100),
  phone: z.string().min(10, { message: "Phone number at least minimum 10 characters"}).max(20),
  email: z.string().email().max(255),
  plan: z.enum(["starter", "growth", "scale"], { message: "Select a plan" }),
  insight: z.string().max(255).nullable(),
});

type RegisterSchema = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <div className='max-w-xl mx-auto min-h-screen mt-16 py-4 px-6 border-b'>
      <h2 className='text-center text-4xl font-bold'>Register</h2>
      <form
        className='grid md:grid-cols-2 gap-4 mt-16'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='border border-black px-4 py-3'
          type='text'
          placeholder='First Name'
          disabled={isSubmitting}
          {...register("firstName")}
        />
        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
        <input
          className='border border-black px-4 py-3'
          type='text'
          placeholder='Last Name'
          disabled={isSubmitting}
          {...register("lastName")}
        />
        {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
        <input
          className='border border-black px-4 py-3 md:col-span-2'
          type='text'
          placeholder='Phone Number'
          disabled={isSubmitting}
          {...register("phone")}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        <input
          className='border border-black px-4 py-3 md:col-span-2'
          type='email'
          placeholder='Email'
          disabled={isSubmitting}
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <select
          className='border border-black px-4 py-3 md:col-span-2'
          {...register("plan")}
        >
          <option value=''>Select Plan</option>
          <option value='starter'>Starter</option>
          <option value='growth'>Growth</option>
          <option value='scale'>Scale</option>
        </select>
        {errors.plan && <ErrorMessage>{errors.plan.message}</ErrorMessage>}
        <textarea
          className='border border-black px-4 py-3 md:col-span-2 h-[150px]'
          placeholder='Share some helpful details...'
          disabled={isSubmitting}
          {...register("insight")}
        />
        {errors.insight && <ErrorMessage>{errors.insight.message}</ErrorMessage>}
        <Button
          component='button'
          variant='primary'
          type='submit'
          className='md:col-span-2 mt-6'
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
      <Alert
        variant='success'
        isSubmitSuccessful={isSubmitSuccessful}
        time={5000}
      >
        Your response success submited!
      </Alert>
    </div>
  );
};

export default RegisterPage;

import { useForm, type FieldValues } from "react-hook-form";
import Signup from "../assets/image.jpg";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm();

  const [registerUser, { isLoading }] = useRegisterMutation();

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-44">
        <ClipLoader cssOverride={override} color="#36d7b7" size={60} />
      </p>
    );
  }

  const onSubmit = async (data: FieldValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await registerUser(data);
      console.log(data);

      if ("error" in response) {
        toast.error(`Registration failed Please try again`, {
          duration: 2000,
        });
      } else {
        toast.success("Registration successfully", {
          duration: 2000,
        });
        // reset();
        navigate("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred during Registration", {
        duration: 2000,
      });
    }
  };
  return (
    <div className="bg-blue-700 max-w-7xl mx-auto min-h-screen pt-48 px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center "
      >
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-y-2 w-[500px] h-[500px] mx-auto bg-white p-6 rounded"
        >
          <h3 className="text-3xl mb-6 text-black font-semibold">Register</h3>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Type your Name"
            className="px-4 py-2 rounded border"
          />
          {errors.name && (
            <p className="text-red-500">{`${errors.name.message}`}</p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Type your Email"
            className="px-4 py-2 rounded border"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6-15 characters",
              },
            })}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded border"
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}

          <input
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Password must be matched",
              },
            })}
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-2 rounded border"
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-48 bg-blue-900 font-semibold text-white disabled:bg-gray-500 py-2 rounded hover:bg-blue-300 hover:text-black"
          >
            Submit
          </button>

          <Link to="/" className="mt-8 text-blue-500 underline text-center">
            AlreadyRegistered? Click here to login
          </Link>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <img
            src={Signup}
            alt="Sign Up"
            className="w-[650px] h-[450px] pl-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;

import { login } from "@/app/(auth)/actions/auth";
import { useFormik } from "formik";
import { useState } from "react";

export interface UserLoginFormType {
  username?: string;
  password?: string;
}

const useLogin = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pending, setPending] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "emilys",
      password: "emilyspass",
    },
    validate: (values) => {
      const errors: UserLoginFormType = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      setPending(true);
      await login(values);
      setPending(false);
    },
  });

  return {
    formik,
    modalOpen,
    pending,
    openModal,
    closeModal,
  };
};

export default useLogin;

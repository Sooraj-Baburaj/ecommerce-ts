"use client";
import React from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";

import useLoginButton from "./useLoginButton";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { UserType } from "@/src/types/user";
import { TbUserCheck, TbUserExclamation } from "react-icons/tb";

export interface LoginButtonPropTypes {
  iconOnly?: boolean;
  user: UserType | null;
}

const LoginButton = ({ iconOnly, user }: LoginButtonPropTypes) => {
  const { formik, modalOpen, pending, openModal, closeModal } =
    useLoginButton();
  return user ? (
    <Button color="transparent" size="md">
      {iconOnly ? (
        <TbUserCheck className="mr-2 h-5 w-5" />
      ) : (
        <>
          <FaUserCheck className="mr-2 h-4 w-4" />
          <span>{user.firstName}</span>
        </>
      )}
    </Button>
  ) : (
    <>
      <Button color="transparent" size="sm" onClick={openModal}>
        {iconOnly ? (
          <TbUserExclamation className="mr-2 h-5 w-5" />
        ) : (
          <>
            <FaUser className="mr-2 h-4 w-4" />
            <span>Login</span>
          </>
        )}
      </Button>
      <Modal show={modalOpen} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to Shoply
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                placeholder="Username: emilys"
                {...formik.getFieldProps("username")}
                required
                color={formik.errors.username ? "failure" : "gray"}
                helperText={formik.errors.username}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="Password: emilyspass"
                {...formik.getFieldProps("password")}
                required
                color={formik.errors.password ? "failure" : "gray"}
                helperText={formik.errors.password}
              />
            </div>

            <div className="w-full">
              <Button
                onClick={() => formik.handleSubmit()}
                isProcessing={pending}
                disabled={pending}
                color="black"
              >
                Log in to your account
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginButton;

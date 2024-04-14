"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import SuccessToast from "@/components/SuccessToast";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactForm> = async (data: ContactForm) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status == 200) {
        setSubmitted(true);
      } else {
        throw new Error(`${res.status} - ${res.body}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Contact us for any questions, suggestions or help. We&#39;ll get
              back to you within 1-3 working days!
            </p>
            <dl className="mt-8 text-base text-gray-500">
              {/* <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>164/41 Lake Gardens,</p>
                  <p>St. Augustine, FL 30024</p>
                </dd>
              </div> */}

              {/* Uncomment */}
              {/* <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+91 85840 11454</span>
                </dd>
              </div> 
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">prannay@manuscriptai.co</span>
                </dd>
              </div>
              */}
            </dl>
            {/* <p className="mt-6 text-base text-gray-500">
              Looking for careers?{" "}
              <Link href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </Link>
              .
            </p> */}
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  {" "}
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  autoComplete="name"
                  className="border block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  placeholder="Full name*"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {" "}
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  autoComplete="email"
                  className="border block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  placeholder="Email*"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  {" "}
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  autoComplete="tel"
                  className="border block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  placeholder="Phone*"
                  {...register("phone", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {" "}
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-textarea block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                  placeholder="Message*"
                  {...register("message", { required: true })}></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  {isLoading ? <LoadingSpinner color="text-white" /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {submitted && (
        <SuccessToast message="Message sent! We'll get back to you in 1-3 business days" />
      )}
    </div>
  );
}

export default ContactForm;

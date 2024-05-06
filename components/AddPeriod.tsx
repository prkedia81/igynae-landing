import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface Props {
  date: Date;
}

function AddPeriod({ date }: Props) {
  console.log(date);
  return (
    <>
      <section className="w-full max-w-2xl mx-auto py-12 md:py-24">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              Choose how your period was on {date.toISOString()}?
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Answer the following questions to get a personalized
              recommendation.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold">How was your PMS?</h2>
              <RadioGroup className="mt-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="goal1"
                    value="goal1"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="goal1">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      1
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="goal2"
                    value="goal2"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="goal2">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      2
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="goal3"
                    value="goal3"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="goal3">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      3
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                What is your business type?
              </h2>
              <RadioGroup className="mt-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="business1"
                    value="business1"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="business1">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      Ecommerce
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="business2"
                    value="business2"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="business2">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      Service-based
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="business3"
                    value="business3"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="business3">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      Non-profit
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-xl font-semibold">What is your budget?</h2>
              <RadioGroup className="mt-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="budget1"
                    value="budget1"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="budget1">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      $0 - $1,000
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="budget2"
                    value="budget2"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="budget2">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      $1,000 - $5,000
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    className="peer sr-only"
                    id="budget3"
                    value="budget3"
                  />
                  <Label
                    className="flex items-center space-x-3 cursor-pointer"
                    htmlFor="budget3">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-gray-900 dark:border-gray-600 dark:peer-checked:border-gray-50">
                      <div className="w-3 h-3 rounded-full bg-gray-900 peer-checked:block hidden dark:bg-gray-50" />
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-gray-50">
                      $5,000+
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddPeriod;

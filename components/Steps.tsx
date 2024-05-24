const steps = [
  {
    name: "Register",
    description:
      "Register to consult with me at your convenience and with privacy.",
    number: 1,
  },
  {
    name: "Answer doctor's questions",
    description:
      "Dr. Monica will ask you a set of questions like a regular Gynaecoligist doctor. Based on your answers she will give her recommendations to heal your periods by diet, lifestyle modifications & natural supplements. No hormones!!",
    number: 2,
  },
  {
    name: "Track your periods",
    description:
      "Dr. Monica will help you track your periods - predict your next period, ovulation dates to get preganant (not to be used as contraceptive methods) and our patented, comprehensive menstrual health index. In case your menstrual health score is deteriorating or you are currently having problems that it will suggest natural remedies.",
    number: 3,
  },
];

export default function Steps() {
  return (
    <div>
      {/* Header */}
      <div className="pt-6 max-w-7xl mx-auto px-4 pb-12 md:pb-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-black md:text-4xl lg:text-5xl">
          How it works?
        </h1>
        {/* <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
                id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
                fames. Dui, amet, nec sit pulvinar.
              </p> */}
      </div>

      {/* Overlapping cards */}
      <section
        className="max-w-7xl mx-auto  z-10 px-4 pb-12 md:pb-16 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Steps to get started
        </h2>
        <div className="text-center md:text-left grid grid-cols-1 gap-y-3 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {steps.map((step) => (
            <div
              key={step.name}
              className="flex flex-col bg-white rounded-2xl transform transition duration-1000 ease-out hover:-translate-y-5">
              <div className="flex-1  pt-6 px-6 pb-8 md:px-8">
                <div className="mx-auto md:mx-0 mb-6 h-12 w-12 text-white font-bold flex items-center justify-center rounded-xl shadow-lg bg-gray-800 ">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {step.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

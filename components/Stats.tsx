/* This example requires Tailwind CSS v2.0+ */
export default function Stats() {
  return (
    <div className="bg-purple-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Free for 1st year, Rs 100/- per year later.
          </h2>
          <p className="mt-3 text-xl text-purple-200 sm:mt-4"></p>
        </div>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-50">
          Initial promo offer: For every referral you get an year free!
        </p>
        {/* <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
              Pepperoni
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
              Delivery
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
              Calories
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              100k+
            </dd>
          </div>
        </dl> */}
      </div>
    </div>
  );
}

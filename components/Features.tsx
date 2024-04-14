/* This example requires Tailwind CSS v2.0+ */
import {
  Squares2X2Icon,
  GlobeAltIcon,
  LightBulbIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  // {
  //   name: "Competitive exchange rates",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  //   icon: GlobeAltIcon,
  // },
  // {
  //   name: "No hidden fees",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  //   icon: ScaleIcon,
  // },
  // {
  //   name: "Transfers are instant",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  //   icon: Squares2X2Icon,
  // },
  // {
  //   name: "Mobile notifications",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  //   icon: LightBulbIcon,
  // },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

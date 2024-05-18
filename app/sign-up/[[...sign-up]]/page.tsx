import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="py-12 flex flex-row items-center justify-center w-full">
      <SignUp path="/sign-up" />
    </div>
  );
}

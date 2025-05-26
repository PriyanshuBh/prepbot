import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-[#09090B]">
      <div className=" lg:min-h-screen flex items-center justify-center px-8 py-8 ">
        <SignIn  />
      </div>
    </section>
  );
}

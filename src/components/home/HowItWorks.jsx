import { BriefcaseBusiness, FileText, CircleCheckBig } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: "Post Your Task",
      description:
        "Describe your project, set your budget, and publish it to thousands of skilled freelancers.",
    },
    {
      id: 2,
      icon: <BriefcaseBusiness className="h-8 w-8 text-green-600" />,
      title: "Receive Proposals",
      description:
        "Freelancers submit proposals, allowing you to compare profiles, skills, and pricing.",
    },
    {
      id: 3,
      icon: <CircleCheckBig className="h-8 w-8 text-green-600" />,
      title: "Hire & Complete",
      description:
        "Choose the best freelancer, collaborate securely, and receive quality work on time.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#111827]">
            Get Started in Three Simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Whether you're hiring or freelancing, Flancify makes the entire
            process simple, secure, and efficient.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#111827] transition group-hover:text-green-600">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

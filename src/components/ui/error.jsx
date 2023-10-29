import Section from "@/layouts/Section";

const Error = () => {
  return (
    <Section className="flex flex-col gap-4 items-center justify-center h-96">
      <h1 className="text-5xl font-semibold text-gGreen">Oops!</h1>
      <p className="">Something went wrong! Please try after some time</p>
    </Section>
  );
};

export default Error;

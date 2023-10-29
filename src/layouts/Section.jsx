const Section = ({ children, className }) => {
  return (
    <div
      className={`mx-4 lg:mx-40 lg:px-10 2xl:px-60 py-8 lg:my-14 ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
// mx-32 px-8 2xl:px-60 my-14 flex

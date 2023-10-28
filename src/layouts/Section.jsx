const Section = ({ children, className }) => {
  return (
    <div className={`mx-40 px-10 2xl:px-60 my-14 ${className}`}>{children}</div>
  );
};

export default Section;
// mx-32 px-8 2xl:px-60 my-14 flex

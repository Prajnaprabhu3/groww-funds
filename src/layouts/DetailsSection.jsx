const { default: Section } = require("@/layouts/Section");

const DetailsLayout = ({ children, className }) => {
  return (
    <div
      className={`h-fit border dark:border-zinc-800 rounded-md  ${className}`}
    >
      {children}
    </div>
  );
};

export default DetailsLayout;

const Badge = ({ industry, sector }) => {
  return (
    <div className="flex gap-1 text-sm font-semibold text-green-600 bg-green-200 rounded-full px-4 py-2">
      <p>{industry} </p>
      <p>{sector}</p>
    </div>
  );
};

export default Badge;

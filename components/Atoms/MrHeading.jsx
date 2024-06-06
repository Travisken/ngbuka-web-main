
const MrHeading = ({
  type = "h1",
  className = "",
  fontWeight = "font-medium",
  children,
  fontFamily = "font-fira",
  onClick = () => {},
}) => {
  const HeadingVariants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  };

  const HeadingStyle = {
    h1: "text-4xl",
    h2: "text-[32px]",
    h3: "text-[28px]",
    h4: "text-[24px]",
    h5: "text-[20px]",
    h6: "text-[18px]",
  };
  const Type = HeadingVariants[type] ? HeadingVariants[type] : "h1";
  return (
    <Type
      className={`${HeadingStyle[type]} ${fontWeight} ${className} ${fontFamily}`}
      onClick={onClick}
    >
      {children}
    </Type>
  );
};

export default MrHeading;

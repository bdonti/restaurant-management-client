const SectionTile = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p className="text-[#D99904] text-[20px] italic mb-6">{subHeading}</p>
      <p className="mb-6 text-[#151515] text-[40px]">{heading}</p>
    </div>
  );
};

export default SectionTile;

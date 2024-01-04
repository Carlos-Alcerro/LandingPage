import Image from "next/image";

export const BackGroundRadialLeft = () => {
  return (
    <div className="left-0 -z-50 absolute top-0">
      <Image
        src="/assets/background-floated-left.png"
        width={850}
        height={650}
        alt="Circle Left"
      />
    </div>
  );
};

import Image from "next/image";

export const BackGroundRadialRigth = () => {
  return (
    <div className="right-0 -z-50 absolute top-0">
      <Image
        src="/assets/background-floated-right.png"
        width={850}
        height={650}
        alt="Circle Rigth"
      />
    </div>
  );
};

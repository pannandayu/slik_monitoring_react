import Image from "next/image";

const FourOFour: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "30%",
      }}
    >
      <h1>Page Not Found</h1>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "25%", height: "auto" }}
        src={"/lost.png"}
        alt="Are you lost?"
      />
    </div>
  );
};

export default FourOFour;

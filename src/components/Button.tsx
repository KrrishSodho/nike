import Image from "next/image";

const Button = ({ label, iconURL }) => {
  return (
    <button className="bg-coral-red rounded-full text-white border-coral-red flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none">
      {label}
      <Image
        alt="Arrow Right icon "
        src={iconURL}
        className="rounded-full ml-2 w-5 h-5"
      />
    </button>
  );
};

export default Button;

import Image from "next/image";

const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  const handelClick = () => {
    if (bigShoeImg !== imageURL.bigShoe) changeBigShoeImage(imageURL.bigShoe);
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imageURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handelClick}
    >
      <div className="flex justify-center items-center bg-cover bg-card bg-center sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
        <Image
          height={103.34}
          width={127}
          alt="shoes Thumbnail"
          src={imageURL.thumbnail}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

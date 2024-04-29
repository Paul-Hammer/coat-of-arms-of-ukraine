import Image from "next/image";
type Props = {
  name: string;
  link: string;
  width: number;
  height: number;
};
export default function Trident({ name, link, width, height }: Props) {
  return (
    <div className="max-w-[400px] grow rounded-2xl border border-stone-700 sm:grow-0">
      <div className="flex justify-center">
        <div className="flex h-[150px] justify-center overflow-hidden p-3 sm:h-[290px] sm:w-[290px] sm:p-5">
          <Image
            className="h-full w-full object-contain"
            src={link}
            alt={name}
            width={width}
            height={height}
          />
        </div>
      </div>
      <div className="p-3 sm:p-5">
        <h2 className="break-words text-2xl">{name}</h2>
        <button className="mt-3 rounded-md bg-wheat p-1 text-black sm:mt-5 sm:px-3 sm:py-2">
          Налаштувати
        </button>
      </div>
    </div>
  );
}

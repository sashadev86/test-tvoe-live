import Image from "next/image";
import heroBg from "../../../public/img/hero/hero-bg.png";
import imageTitle from "../../../public/img/hero/hero-title.png";
import Text from "../Text";
import Button from "../Button";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className="relative w-full pt-[294px] pb-[24px] flex flex-col items-center">
      <Image
        className="absolute top-0 right-[3px] z-[-1]"
        src={heroBg}
        width={1250}
        height={800}
        alt={""}
      />

      <div className="flex flex-col items-center gap-[36px] max-w-[886px] translate-x-[-12.2%]">
        <Image
          // className="mb-[30px]"
          src={imageTitle}
          width={576}
          height={228}
          alt={""}
        />
        <Text
          classes="text-white text-[40px] font-medium leading-[51px] text-center tracking-[.1px]"
          text=" Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле."
          tag="h1"
        />

        <div className="flex gap-[24px]">
          <Button
            className={`text-[30px] font-medium leading-normal text-white py-[18px] px-[52px] rounded-2xl ${styles["hero__button-see"]} hover:opacity-70 transition-opacity duration-300 ease-in-out `}
            text="Смотреть"
          />
          <Button
            className={`text-[30px] font-medium leading-normal text-white py-[18px] px-[52px] rounded-2xl ${styles["hero__button-about"]} backdrop-blur-[20px] hover:opacity-70 transition-opacity duration-300 ease-in-out `}
            text="О фильме"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

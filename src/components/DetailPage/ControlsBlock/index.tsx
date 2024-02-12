import Button from "@/components/Button";
import Icon from "@/components/Icon/Icon";

const ControlsBlock = () => {
  return (
    <div className="mb-[106px] flex items-center gap-[17px]">
      <Button
        className="px-[32px] pt-[16px] pb-[19px] text-[30px] font-medium text-white bg-gradient-blue rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
        text="Смотреть"
      />
      <Button
        className="px-[32px] pt-[16px] pb-[19px] text-[30px] font-medium text-white bg-white/[.2] rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
        text="Трейлер"
      />
      <Button
        className="px-[37px] py-[26px] text-[30px] text-white bg-white/[.2] rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
        text=""
      >
        <Icon id="bookmark" className="text-white w-[21.33px] h-[26.67px]" />
      </Button>
      <Button
        className="px-[32px] py-[24px] text-[30px] text-white bg-white/[.2] rounded-[16px] hover:opacity-70 focus:opacity-70 transition-opacity duration-300 ease-in-out outline-none"
        text=""
      >
        <Icon id="like" className="text-white w-[32px] h-[32px]" />
      </Button>
    </div>
  );
}

export default ControlsBlock
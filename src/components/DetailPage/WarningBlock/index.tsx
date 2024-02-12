import Icon from "@/components/Icon/Icon";
import Text from "@/components/Text";

const WarningBlock = () => {
  return (
    <div className="mb-[58px] flex items-start gap-[14px]">
      <Icon id={"warning"} className={"w-[55px] h-[45px] text-[#4B4B4B]"} />
      <Text
        classes={"text-[28px] text-[#4B4B4B] leading-[36px] max-w-[1510px]"}
        tag={"p"}
        text={
          "Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью."
        }
      />
    </div>
  );
}

export default WarningBlock
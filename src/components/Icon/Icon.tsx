interface PropsIcon {
  id: string;
  className: string;
}

const Icon = ({ id, className }: PropsIcon) => {
  return (
    <svg className={className}>
      <use href={`/sprite.svg#${id}`}></use>
    </svg>
  );
};

export default Icon;

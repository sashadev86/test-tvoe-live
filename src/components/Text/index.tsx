interface PropsText {
  text: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  classes: string;
}

const Text = ({ tag, text, classes }: PropsText) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={classes}>{text}</Tag>;
};

export default Text;

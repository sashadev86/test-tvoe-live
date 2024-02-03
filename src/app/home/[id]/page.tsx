interface Props {
  params: {
    id: string;
  };
}

const DetailFilm = ({ params }: Props) => {
  

  return <div className="text-white">DetailFilm ID: {params.id}</div>;
};

export default DetailFilm;

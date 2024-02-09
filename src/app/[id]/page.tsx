import DetailPage from "@/components/DetailPage";

interface Props {
  params: {
    id: string;
  };
}

const DetailFilm = ({ params }: Props) => {
  const id = params.id;

  return (
  <main className="flex min-h-screen flex-col pl-[215px]" id="main">
    <DetailPage id={id} />
  </main>
  );
};

export default DetailFilm;

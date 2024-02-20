import { filmsAndSeriesData } from "@/Data";
import DetailPage from "@/components/DetailPage";

interface Props {
  params: {
    id: string;
  };
}

export const generateStaticParams = () => {
  return filmsAndSeriesData.mediaList.map((item) => {
    return {
      id: item.id.toString()
    }
  })
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

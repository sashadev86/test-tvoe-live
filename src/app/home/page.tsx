import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-white">Home</h1>
      <Link href="/home/[id]" as="/home/123">
        <h3 className="text-white">Go to DetailFilm with ID 123</h3>
      </Link>
    </div>
  );
};

export default Home;

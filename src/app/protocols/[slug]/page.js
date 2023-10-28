import Navbar from "../../components/Navbar";
import Protocol from "../../components/Protocol"
export default function Home({ params }) {

  return (
    <div>
      <Navbar />
      <div>
        <Protocol props={params.slug}/>
      </div>
    </div>
  );
}
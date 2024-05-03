import Button from "../../components/ui/Button";
import HeroImage from "/images/1.jpg";
const Home = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2">
      <div className="bg-red-400">
        <h2>
          {" "}
          <span> Best Courses </span> Are Waiting For Enrich Your Skills{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
          aliquam.
        </p>
        <div>
          <input type="search" placeholder="what you learn" />
          <Button text={"Explore"} classname={""} />
        </div>
      </div>
      <div className="bg-blue-300"></div>
    </div>
  );
};

export default Home;

import Card from "../components/ReuseAble/Card";
import ReUse from "../components/ReuseAble/ReUse";

const OurRecomend = () => {
  return (
    <>
      <div className="my-20">
        <ReUse title="chef recomends" subtitle={"---Should Try---"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </>
  );
};

export default OurRecomend;

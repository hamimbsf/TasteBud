import Context from "./Context";

const Cover = ({ banner, title }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="bg-cover bg-center h-[70vh] flex items-center bg-fixed py-20"
      >
        <Context title={title} />
      </div>
    </>
  );
};

export default Cover;

import "../../src/App.css";

export const Loading = ({ colorWhite, colorBlack }) => {
  return (
    <>
      {colorWhite && (
        <div className="loading">
          {colorWhite && <span className="loader-white"></span>}
        </div>
      )}
      {colorBlack && (
        <div className="loading">
          {colorBlack && <span className="loader-black"></span>}
        </div>
      )}
    </>
  );
};

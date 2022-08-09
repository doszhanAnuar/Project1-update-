import { persons } from "../../data/personaj";
import { PeopleLayout } from "./PeopleLayout";
import { useWindowSize } from "../../hooks/useWindowsSize";

export const Home = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="a d-flex flex-row justify-content-between"
      >
        {width >= 720 ? (
          <div className="a-child-text">
            <h1>
              Train like <span className="under">...</span>
            </h1>
            <h2>
              We spend countless hours on the internet looking for training
              programs and recommendations from people we look up to. Browse our
              ever-expanding database below.
              <strong>Don't waste your time searching, better go train.</strong>
            </h2>
          </div>
        ) : (
          <div
            className="a-child-text"
            style={{ fontFamily: "Georgia,Times, serif", paddingTop: "16px" }}
          >
            <h1 style={{ fontSize: "30px" }}>
              Train like <span className="under">...</span>
            </h1>
            <h2 style={{ fontSize: "20px" }}>
              We spend countless hours on the internet looking for training
              programs and recommendations from people we look up to. Browse our
              ever-expanding database below.
              <strong>Don't waste your time searching, better go train.</strong>
            </h2>
          </div>
        )}

        {width >= 720 && (
          <div className="a-child-img">
            {persons.slice(0, 16).map((person) => (
              <div key={person.name}>
                <img src={person.icon} className="first" />
              </div>
            ))}
          </div>
        )}
      </div>
      <PeopleLayout />
    </>
  );
};

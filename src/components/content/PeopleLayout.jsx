import { Link } from "react-router-dom";

import { BasicChips } from "./BasicChips";
import { persons } from "../../data/personaj";

import { useWindowSize } from "../../hooks/useWindowsSize";

export const PeopleLayout = () => {
  const { width } = useWindowSize();

  return (
    <div
      style={{ maxWidth: "1200px", margin: "0 auto" }}
      className="main-section"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="main-child-text" style={{ paddingTop: "16px" }}>
          Train like ...
        </div>
        {width >= 720 ? (
          <div className="main-child-inf">
            {persons.map((person) => (
              <div key={person.name} className="first-div">
                <Link to={`/person/${person.name}`.replace(/ /g, "")}>
                  <img
                    src={person.icon}
                    className="sec"
                    style={{ width: "100%" }}
                  />
                </Link>
                <div
                  key={person.id}
                  className="person-name d-flex justify-content-center"
                >
                  {person.name}
                </div>
                <div className="material-fix">
                  <BasicChips positions={person.position} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="main-child-inf"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridRemplateRows: "repeat(5, 22vw)",
              gridGap: "15px",
            }}
          >
            {persons.map((person) => (
              <div key={person.name} className="first-div">
                <Link to={`/person/${person.name}`.replace(/ /g, "")}>
                  <img
                    src={person.icon}
                    className="sec"
                    style={{
                      width: "100%",
                      height: "75%",
                      maxHeight: "240px",
                      borderRadius: "5px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </Link>
                <div
                  key={person.id}
                  className="person-name d-flex justify-content-center"
                >
                  {person.name}
                </div>
                <div className="material-fix">
                  <BasicChips positions={person.position} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-column-gap: 1rem;
// grid-row-gap: 1rem;
// display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gridColumnGap: "1rem",
//               gridRowGap: "1rem",

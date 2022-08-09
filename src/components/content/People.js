import React from "react";
import { PeopleLayout } from "./PeopleLayout";

export const People = () => {
  return (
    <>
      <div className="main-container">
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "rgb(248, 242, 242)",
          }}
        >
          <div
            style={{
              width: "19%",
            }}
          >
            <div>
              <div className="nav-words">Actor</div>
            </div>
          </div>

          <PeopleLayout />
        </div>
      </div>
    </>
  );
};

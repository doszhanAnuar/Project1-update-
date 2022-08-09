import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BasicChips } from "../../components/content/BasicChips";
import { persons } from "../../data/personaj";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useWindowSize } from "../../hooks/useWindowsSize";
export const Person = () => {
  const { id } = useParams();
  const { width } = useWindowSize();
  const person =
    persons && persons.filter((el) => el.name.replace(/ /g, "") === id)[0];

  const [trainings, setTrainings] = useState(
    person && person.trainings && person.trainings.length > 0
      ? person.trainings
      : []
  );

  const handleChange = (day, trainname) => {
    setTrainings((prevTrainings) =>
      prevTrainings.map((training) => {
        if (training.day === day) {
          return {
            ...training,
            myTrain: training.myTrain.map((train) => {
              if (train.trainname === trainname) {
                return { ...train, isExpanded: !train.isExpanded };
              } else return train;
            }),
          };
        } else return training;
      })
    );
  };

  if (!person) return <>No person ^_^</>;

  return (
    <div>
      <div>
        <img
          src={person.icon}
          className="dop-img"
          style={{
            borderRadius: "200px",
            width: "250px",
            height: "250px",
          }}
        />
        <div
          className="word-part"
          style={{ paddingTop: 16, marginLeft: "1rem" }}
        >
          <h1 className="dop-h1">{person.name}</h1>
          <div className="material-fix1">
            <BasicChips positions={person.position} />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
        }}
        className="bob border-0 mb-3 shadow"
      >
        <div
          className="diary"
          style={{ borderBottom: "solid", borderWidth: "2px" }}
        >
          <h4>Training program</h4>
        </div>

        {trainings.length > 0 &&
          trainings.map((p, idx) => (
            <div
              key={idx}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "10px",
              }}
              className="list-member"
            >
              <small className="text-muted mb-0">{p.trainname}</small>
              <h3
                style={{
                  height: "80px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {p.day}
                <small style={{ fontSize: "15px" }}>{p.trainday}</small>
                <small style={{ fontSize: "20px" }}>Warm Up: {p.warmup}</small>
              </h3>

              {p.myTrain &&
                p.myTrain.length > 0 &&
                p.myTrain.map((t) => (
                  <div>
                    <Accordion
                      expanded={t.isExpanded}
                      onChange={() => handleChange(p.day, t.trainname)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography
                          sx={{
                            flexShrink: 0,
                            fontSize: width < 720 ? "10px" : "16px",
                          }}
                        >
                          {t.quantity && t.quantity.sets && (
                            <h5>{t.trainname}</h5>
                          )}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div style={{ paddingLeft: "10px" }} className="h21">
                            {t.quantity && t.quantity.sets && (
                              <h5>Sets: {t.quantity.sets}</h5>
                            )}
                            {t.quantity && t.quantity.reps && (
                              <h5>Reps: {t.quantity.reps}</h5>
                            )}
                            {t.quantity && t.quantity.reps && (
                              <h5>Notes: {t.quantity.notes}</h5>
                            )}
                            {t.quantity && t.quantity.reps && (
                              <h5>rest: {t.quantity.rest}</h5>
                            )}
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

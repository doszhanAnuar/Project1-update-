import React, { useState } from "react";
import { Calendar } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { dateFnsLocalizer } from "react-big-calendar";
import { Color } from "./Color";
const locales = {
  "en-Us": require("date-fns/locale/en-US"),
};
const locolizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [
  {
    title: "Conference",
    start: new Date(),
    end: new Date(),
  },
];
export const Habit = () => {
  return (
    <>
      <Calendar
        localizer={locolizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      <input className="form-control me-2" type="text" placeholder="Train" />
      <input className="form-control me-2" type="number" placeholder="Days" />
      <input className="form-control me-2" type="text" placeholder="Color" />
      <button className="btn btn-outline-success" type="submit">
        Sumbit
      </button>
      {/* <input>Chal</input>
      <input>Day</input>
      <button>color</button> */}
      {/* <Color /> */}
    </>
  );
};

import React from "react";
import FullCalendar from "@fullcalendar";
import dayGridPlugin from "@fullcalendar";

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
    );
  }
}

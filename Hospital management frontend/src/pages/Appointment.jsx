import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm.jsx";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Medico Management Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
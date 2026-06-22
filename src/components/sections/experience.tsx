"use client";
import { AccordionItem, IExperience } from "@/types";
import { experiences } from "@/data/experience";
import { useState } from "react";
import Accordion from "../ui/accordion";

export default function Experience() {
  const items: AccordionItem[] = experiences.map((exp) => ({
    title: `${exp.jobTitle}`,
    subtitle: `${exp.company}`,
    prop1: `${exp.location}`,
    prop2: `${exp.workMode}`,
    prop3: `${exp.period}`,
    description: exp.description,
    chipsType1: exp.stack,
    chipsType2: exp.exposures,
  }));
  return (
    <section id="experience" className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
      <Accordion items={items}></Accordion>
    </section>
  );
}

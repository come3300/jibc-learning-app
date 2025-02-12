"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function AccordionComponent(props: { title: string; text: string }) {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label={props.title} title={props.title}>
        {props.text}
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionComponent;

import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2> Learn with TheGetWeb</h2>
      <Panel
        title="Paid course"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis accusamus, ut dignissimos a architecto quia illum nam totam
        molestiae?
      </Panel>
      <Panel
        title="Free course"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur
        id libero voluptas, aut reiciendis porro distinctio a ipsa autem?
      </Panel>
    </>
  );
}

import React, { useState } from "react";
import { DateRangeInput } from "@blueprintjs/datetime";
import { Button, Intent } from "@blueprintjs/core";
import { Example } from "./Example";

export const DateTimeExample = () => {
  const [state, setState] = useState({
    startDate: null,   
    endDate: null
  })

  const handleRangeChange = (selectedRange) => {
    setState({
    startDate: selectedRange[0],   
    endDate: selectedRange[1]
  })
}

// const getHourlyDiff = (selectedRange) => {
//   console.log(selectedRange)
//   setState({
//   startDate: selectedRange[0],   
//   endDate: selectedRange[1]
// })
// }

  return (
    <div className = 'center'>
    <Example header="Select date and time for booking">
      <DateRangeInput
        formatDate={date => date.toLocaleString()}
        onChange={handleRangeChange}
        parseDate={str => new Date(str)}
        value={[state.startDate, state.endDate]}
      />
      <Button intent={Intent.PRIMARY} text="Book" />
    </Example>
    </div>
  );
}



"use client";

import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Initialize on the client after hydration
  useEffect(() => {
    setStartDate(new Date());
  }, []);

  // Safer HTML date formatter (no timezone/off-by-one issues)
  const toHtmlDate = (d: Date) => d.toISOString().slice(0, 10);

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>

      {/* Only render once the date exists on the client */}
      {startDate && <h3>{JSON.stringify(startDate)}</h3>}
      {startDate && <h3>{toHtmlDate(startDate)}</h3>}

      <FormControl
        type="date"
        value={startDate ? toHtmlDate(startDate) : ""}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <hr />
    </div>
  );
}

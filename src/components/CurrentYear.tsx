'use client';

import { useEffect, useState } from 'react';

// Pages are statically built, so refresh the year in the browser too.
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}

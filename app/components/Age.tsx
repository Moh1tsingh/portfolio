"use client";

import { useEffect, useState } from "react";

const birthDate = new Date(2003, 7, 19); // Aug 19, 2003
const averageYearMs = 365.2425 * 24 * 60 * 60 * 1000;

function getAge({ precise = false }: { precise?: boolean }) {
  const now = new Date();

  if (precise) {
    return ((now.getTime() - birthDate.getTime()) / averageYearMs).toFixed(9);
  }

  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age.toString();
}

export default function Age({ precise = false }: { precise?: boolean }) {
  const [age, setAge] = useState(() => getAge({ precise }));

  useEffect(() => {
    setAge(getAge({ precise }));

    if (!precise) return;

    const id = window.setInterval(() => {
      setAge(getAge({ precise }));
    }, 100);

    return () => window.clearInterval(id);
  }, [precise]);

  return <>{age}</>;
}

"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();

  return (
    <div>
      <h1>Hellow</h1>
      <div>{JSON.stringify(data)}</div>
      <div>{JSON.stringify(status)}</div>
    </div>
  );
}

type IconName = "network" | "people" | "customer" | "operations" | "governance" | "insights" | "check" | "arrow";
export function Icon({ name, decorative = true }: { name: IconName; decorative?: boolean }) {
  const paths: Record<IconName, React.ReactNode> = {
    network: <><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M11 7 6 16m7-9 5 9M7 18h10"/></>,
    people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6m0-5c4 0 6 2 6 5"/></>,
    customer: <><path d="M4 5h16v12H8l-4 3V5Z"/><path d="M8 9h8m-8 4h5"/></>,
    operations: <><path d="M4 7h16v13H4zM8 7V4h8v3"/><path d="M4 12h16m-10 0v3h4v-3"/></>,
    governance: <><path d="M12 3 4 6v5c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-5"/></>,
    insights: <><path d="M4 20V10m6 10V4m6 16v-7m5 7H2"/></>,
    check: <path d="m5 12 4 4L19 6"/>, arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={decorative}>{paths[name]}</svg>;
}

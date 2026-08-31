/**
 * Personalize this template here.
 * Change names, copy, links, and lists. The React file only reads these values.
 */
export const student = {
  mark: "KR / 2026",
  name: "Kavya Reddy",
  programLines: ["B.Tech Computer Science", "BITS Pilani"],
  bio: "I build tools that make campus labs less chaotic. Looking for a summer internship in systems or product engineering.",
  email: "kavya.reddy@example.edu",
};

export const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#courses", label: "Coursework" },
];

export const projects = [
  {
    year: "2026",
    title: "Queueboard",
    body: "A lab booking board that cut wait time at the campus GPU cluster. Students claim a slot, see who is next, and get a ping when a machine frees up.",
    stack: ["Next.js", "Postgres", "Redis"],
  },
  {
    year: "2025",
    title: "Meshnote",
    body: "Shared lecture notes that stay in sync offline. Built for hostel wifi that drops mid-class.",
    stack: ["React Native", "SQLite", "CRDTs"],
  },
  {
    year: "2025",
    title: "Tracekit",
    body: "A tiny tracer for student OS labs. You step one syscall at a time instead of reading a 400-line log.",
    stack: ["C", "Python", "WASM"],
  },
];

export const courses = [
  { name: "Operating Systems", detail: "Prof. Iyer · A" },
  { name: "Networks", detail: "Prof. Banerjee · A-" },
  { name: "Compilers", detail: "Prof. Shah · A" },
  { name: "Distributed Systems", detail: "Prof. Menon · in progress" },
];

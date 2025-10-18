"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    { label: "Home", path: `/Courses/${cid}/Home` },
    { label: "Modules", path: `/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Courses/${cid}/Grades` },
    { label: "People", path: `/Courses/${cid}/People/Table` },
  ];

  return (
    <ListGroup
      id="wd-courses-navigation"
      style={{ width: 200 }}
      className="wd rounded-0 fs-5"
    >
      {links.map((link) => (
        <ListGroupItem
          key={link.label}
          as={Link}
          href={link.path}
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className={`text-center border-0 ${
            pathname.includes(link.label)
              ? "text-dark border-start border-2 border-danger ps-2"
              : "text-danger"
          }`}
          action
        >
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

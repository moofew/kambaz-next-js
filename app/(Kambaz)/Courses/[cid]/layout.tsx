/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode, useState, useEffect } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams() as { cid: string };
  const router = useRouter();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const course = courses.find((c: any) => c._id === cid);
  const [showNav, setShowNav] = useState(true);

  const isFaculty = currentUser?.role === "FACULTY";
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id && enrollment.course === cid
  );

  useEffect(() => {
    if (currentUser && !isFaculty && !isEnrolled) {
      router.push("/Dashboard");
    }
  }, [currentUser, isFaculty, isEnrolled, router]);

  if (currentUser && !isFaculty && !isEnrolled) {
    return null;
  }

  return (
    <div id="wd-courses">
      <h2>
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setShowNav((s) => !s)}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {showNav && (
          <div>
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}

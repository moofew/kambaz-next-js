"use client";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void} ) {  const router = useRouter();
  const { cid } = useParams();

  return (
    <span className="float-end d-inline-flex align-items-center gap-2">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          editModule(moduleId);
        }}
      >
        <FaPen className="text-primary" />
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteModule(moduleId);
        }}
      >
        <FaTrash className="text-danger" />
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          router.push(`/Courses/${cid}/Assignments/Editor`);
        }}
      >
        <FaPlus className="text-success" />
      </a>
      <FaCheck className="text-success" />
    </span>
  );
}

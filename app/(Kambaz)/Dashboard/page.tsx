import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
            <Link href="/Courses/1" className="wd-dashboard-course-link">
            <Image src="/images/black.jpg" width={200} height={150} alt="Java"/>
            <div>
              <h5> CS1 Intro to Java </h5>
              <p className="wd-dashboard-course-title">
                Java Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
                        <Link href="/Courses/2" className="wd-dashboard-course-link">
            <Image src="/images/blue.png" width={200} height={150} alt="Python"/>
            <div>
              <h5> CS2 Intro to Python </h5>
              <p className="wd-dashboard-course-title">
                Python Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
                        <Link href="/Courses/3" className="wd-dashboard-course-link">
            <Image src="/images/green.png" width={200} height={150} alt="HTML/CSS"/>
            <div>
              <h5> CS3 HTML/CSS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack Web Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
                        <Link href="/Courses/4" className="wd-dashboard-course-link">
            <Image src="/images/orange.png" width={200} height={150} alt="Kotlin"/>
            <div>
              <h5> CS4 Kotlin </h5>
              <p className="wd-dashboard-course-title">
                Kotlin Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
                        <Link href="/Courses/5" className="wd-dashboard-course-link">
            <Image src="/images/purple.png" width={200} height={150} alt="MERN Stack"/>
            <div>
              <h5> CS5 MERN Stack </h5>
              <p className="wd-dashboard-course-title">
                Front End Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
                        <Link href="/Courses/6" className="wd-dashboard-course-link">
            <Image src="/images/red.png" width={200} height={150} alt="C++"/>
            <div>
              <h5> CS6 C++ </h5>
              <p className="wd-dashboard-course-title">
                C++ Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
                        <Link href="/Courses/7" className="wd-dashboard-course-link">
            <Image src="/images/yellow.jpg" width={200} height={150} alt="OCaml"/>
            <div>
              <h5> CS7 OCaml </h5>
              <p className="wd-dashboard-course-title">
                OCaml Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

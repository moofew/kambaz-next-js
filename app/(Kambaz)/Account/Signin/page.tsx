import { FormControl } from "react-bootstrap";
import Link from "next/link";
import AccountNavigation from "../Navigation";

export default function Signin() {
  return (
    <div className="d-flex">
      <div>
        <AccountNavigation />
      </div>

      <div
        id="wd-signin-screen"
        className="p-3"
        style={{ maxWidth: 360, margin: "0 auto" }}
      >
        <h1 className="mb-3">Signin</h1>

        <FormControl
          id="wd-username"
          placeholder="username"
          className="mb-2"
        />

        <FormControl
          id="wd-password"
          placeholder="password"
          type="password"
          className="mb-3"
        />

        <Link
          id="wd-signin-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-3 text-center"
        >
          Signin
        </Link>

        <div className="text-center">
          <Link id="wd-signup-link" href="/Account/Signup" className="me-3">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

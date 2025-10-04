import { FormControl } from "react-bootstrap";
import Link from "next/link";
import AccountNavigation from "../Navigation";

export default function Signup() {
  return (
    <div className="d-flex">
      <div>
        <AccountNavigation />
      </div>

      <div
        id="wd-signup-screen"
        className="p-3"
        style={{ maxWidth: 360, margin: "0 auto" }}
      >
        <h1 className="mb-3">Signup</h1>

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
          id="wd-signup-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-3 text-center"
        >
          Signup
        </Link>

        <div className="text-center">
          <Link id="wd-signin-link" href="/Account/Signin" className="me-3">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}

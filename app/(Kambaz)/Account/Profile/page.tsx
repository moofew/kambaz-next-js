import { FormControl } from "react-bootstrap";
import Link from "next/link";
import AccountNavigation from "../Navigation";

export default function Profile() {
  return (
    <div className="d-flex">
      <div>
        <AccountNavigation />
      </div>

      <div
        id="wd-profile-screen"
        className="p-3"
        style={{ maxWidth: 360, margin: "0 auto" }}
      >
        <h3 className="mb-3">Profile</h3>

        <FormControl
          id="wd-username"
          defaultValue="alice"
          placeholder="username"
          className="mb-2"
        />

        <FormControl
          id="wd-password"
          defaultValue="123"
          placeholder="password"
          type="password"
          className="mb-2"
        />

        <FormControl
          id="wd-firstname"
          defaultValue="Alice"
          placeholder="First Name"
          className="mb-2"
        />

        <FormControl
          id="wd-lastname"
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="mb-2"
        />

        <FormControl
          id="wd-dob"
          type="date"
          defaultValue="2000-01-01"
          className="mb-2"
        />

        <FormControl
          id="wd-email"
          defaultValue="alice@wonderland.com"
          type="email"
          placeholder="Email"
          className="mb-2"
        />

        <FormControl
          id="wd-role"
          as="select"
          defaultValue="Faculty"
          className="mb-3"
        >
          <option>User</option>
          <option>Admin</option>
          <option>Faculty</option>
          <option>Student</option>
        </FormControl>

        <Link
          id="wd-signout-link"
          href="/Account/Signin"
          className="btn btn-danger w-100 mb-3"
        >
          Signout
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import toast from "react-hot-toast";

const notify = (event) => toast.success(event);

export default function Home() {
  function sendEvent(event) {
    let gtmProps = {
      event: "tap_gtmButton",
      eventParams: {
        value: "xyz_abc",
        psid: 115500,
        email: "johnvick@example.com",
        user_id: "john_vick4",
      },
    };
    switch (event) {
      case "login":
        gtmProps = {
          event: "tap_login",
          eventParams: {
            value: "xyz_abc",
            psid: 115500,
            email: "johnvick@example.com",
            user_id: "john_vick4",
          },
          login_id: "12341234",
        };
        break;
      case "home":
        gtmProps = {
          event: "tap_home",
          eventParams: {
            value: "xyz_abc",
            psid: 115500,
            email: "johnvick@example.com",
            user_id: "john_vick4",
          },
        };
        break;
      case "about":
        gtmProps = {
          event: "tap_about",
          eventParams: {
            value: "xyz_abc",
            psid: 115500,
            email: "johnvick@example.com",
            user_id: "john_vick4",
          },
        };
        break;
      case "product":
        gtmProps = {
          event: "tap_product",
          eventParams: {
            value: "xyz_abc",
            psid: 115500,
            email: "johnvick@example.com",
            user_id: "john_vick4",
          },
        };
        break;
      case "logout":
        gtmProps = {
          event: "tap_logout",
          eventParams: {
            value: "xyz_abc",
            psid: 115500,
            email: "johnvick@example.com",
            user_id: "john_vick4",
          },
          login_id: "12341234",
        };
        break;
      default:
        break;
    }
    sendGTMEvent(gtmProps);
    notify(event);
  }
  return (
    <main>
      <p>
        <Link href="/about">Go to About</Link>
      </p>
      <p>
        <Link href="/posts/1">View post 1 (dynamic)</Link>
      </p>
      <div className="flex flex-col w-[20%]">
        <button
          className="m-5 p-4 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => sendEvent("login")}
        >
          login
        </button>
        <button
          className="m-5 p-4 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => sendEvent("home")}
        >
          home
        </button>{" "}
        <button
          className="m-5 p-4 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => sendEvent("about")}
        >
          about
        </button>{" "}
        <button
          className="m-5 p-4 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => sendEvent("product")}
        >
          product
        </button>{" "}
        <button
          className="m-5 p-4 bg-blue-500 text-white rounded cursor-pointer"
          onClick={() => sendEvent("logout")}
        >
          logout
        </button>
      </div>
    </main>
  );
}

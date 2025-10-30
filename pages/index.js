// import { sendGTMEvent } from "@next/third-parties/google";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { trackEvent } from "@/utils";
const IS_WINDOW_AVAILABLE = typeof window !== "undefined";

const notify = (event) => toast.success(event);

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [finalValue, setFinalValue] = useState(null);

  const handleClick = () => {
    const _value = Number(inputValue);
    setFinalValue(_value);
    notify(`userId :  ${_value}`);
  };
  //   function trackGTMEvent(event) {
  //     if (!IS_WINDOW_AVAILABLE) return;
  // console.log('#########event',event)
  //     dataLayer.push(event);
  //   }
  function sendEvent(event) {
    let gtmProps = {
      event: "tap_gtmButton",
      eventParams: {
        value: "xyz_abc",
        psid: 115500,
        email: "johnvick@example.com",
        userId: finalValue,
      },
    };
    switch (event) {
      case "login":
        gtmProps = {
          event: "tap_login_login",
          eventParams: {
            value: "xyz_abc login",
            psid: 115500,
            email: "johnvick@example.com",
            userId: finalValue,
          },
        };
        break;
      case "home":
        gtmProps = {
          event: "tap_home",
          eventParams: {
            value: "xyz_abc home",
            psid: 115500,
            email: "johnvick@example.com",
          },
        };
        break;
      case "about":
        gtmProps = {
          event: "tap_about",
          eventParams: {
            value: "xyz_abc about",
            psid: 115500,
            email: "johnvick@example.com",
          },
        };
        break;
      case "product":
        gtmProps = {
          event: "tap_product product",
          eventParams: {
            value: "xyz_abc",
            psid: 115500,
            email: "johnvick@example.com",
          },
        };
        break;
      case "logout":
        gtmProps = {
          event: "tap_logout",
          eventParams: {
            value: "xyz_abc logout",
            psid: 115500,
            email: "johnvick@example.com",
          },
        };
        break;
      default:
        break;
    }
    trackEvent(gtmProps.event, gtmProps.eventParams);
    notify(event);
  }
  return (
    <main className="ml-20">
      <h1 className="font-bold text-[20px] my-10">GTM-Webengage Demo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
        className="border p-2 rounded w-40 "
      />

      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded ml-6 cursor-pointer"
      >
        Set User
      </button>
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

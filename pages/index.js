// import { sendGTMEvent } from "@next/third-parties/google";
import React, { useState } from "react";
import toast from "react-hot-toast";
const IS_WINDOW_AVAILABLE = typeof window !== "undefined";
import { eventBasicPayload } from "../constants";
import { ClientPageRoot } from "next/dist/client/components/client-page";

const notify = (event) => toast.success(event);

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [finalValue, setFinalValue] = useState(null);
  function getParams(eventName) {
    return Object.entries(eventBasicPayload).reduce((acc, [key, value]) => {
      acc[`${eventName}_${key}`] = value;
      return acc;
    }, {});
  }

  const handleClick = () => {
    const _value = Number(inputValue);
    setFinalValue(_value);
    notify(`userId :  ${_value}`);
  };
  function trackGTMEvent(event) {
    if (!IS_WINDOW_AVAILABLE) return;
    console.log("###event", event);
    dataLayer.push(event);
  }
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
            ...eventBasicPayload,
            ...getParams(event),
          },
          userId: finalValue,
        };
        break;
      case "home":
        gtmProps = {
          event: "tap_home",
          eventParams: {
            value: "xyz_abc home",
            email: "johnvick@example.com",
            version:
              "the government officials have enslaved the general public with their corruption. Most of them are hand in gloves with businessmen and thus the whole",
            parts:
              " fraud and economic, political and administrative manipulations etc have made the people feel greatly miserable and helpless",
            role: "problem with corruption is that it threatens the very existence of the society . Corruption is like a leech draining the blood of the society",
            rate: "ting up government money and accepting bribes.Today, although India is free",
            jn: "ption is an indication of decadence. A corrupt person is termed immoral and dishonest. Only a person with greatly eroded values indulges in corruption.",
            charct:
              "corruption to ancient times. Kautilya, the author of the Arthasastra pointed out corruption of his times. He also talked about the inevitability ",
            city: "impossible for a government servant not to eat up at least a bit of the king s revenue. These in the postwar world became only bolder while  y",
            place:
              "N Y Corruption today is a world-wide phenomenon and India is one of the most corrupt nations in the world.",
            country:
              "It is not easy to define corruption. But in a narrow sense, corruption is mostly concerned with",
            group:
              "Power tends to corrupt, and absolute power corrupts absolutely.",
            ...eventBasicPayload,
            ...getParams(event),
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
            ...eventBasicPayload,
            ...getParams(event),
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
            ...eventBasicPayload,
            ...getParams(event),
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
            ...eventBasicPayload,
            ...getParams(event),
          },
        };
        break;
      default:
        break;
    }
    trackGTMEvent(gtmProps);
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

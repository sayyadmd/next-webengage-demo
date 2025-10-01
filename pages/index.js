import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  function sendEvent() {
    const gtmpros = {
      event: "tap_gtmButton",
      value: "xyz",
      psid: 445500,
      email: "johnvick@gmail.com",
      user_id: "john_vick2",
    };
    console.log("#####event send", gtmpros);
    sendGTMEvent(gtmpros);
  }
  return (
    <main>
      <h1>Welcome — Pages Router</h1>
      <p>
        <Link href="/about">Go to About</Link>
      </p>
      <p>
        <Link href="/posts/1">View post 1 (dynamic)</Link>
      </p>
      <button
        className="m-5 p-4 bg-blue-500 text-white rounded cursor-pointer"
        onClick={sendEvent}
      >
        Send gtm event
      </button>
    </main>
  );
}

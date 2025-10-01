import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  function sendEvent() {
    console.log("#####event send");
    sendGTMEvent({ event: "gtmButtonClicked", value: "xyz" });
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
        Send event
      </button>
    </main>
  );
}

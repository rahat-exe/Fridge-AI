import Protected from "@/components/Protected";
import Image from "next/image";

export default function Home() {
  return (
    <Protected>
      <div>
        <h1>Hello</h1>
      </div>
    </Protected>
  );
}

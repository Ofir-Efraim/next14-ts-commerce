import Image from "next/image";
import KosherCertificate from "@assets/kosher.jpeg";
export default function Home() {
  return (
    <main>
      <Image
        src={KosherCertificate}
        alt={"תעודת כשרות"}
        style={{ height: "100%", width: "100%" }}
      />
    </main>
  );
}

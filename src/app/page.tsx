//import Image from "next/image";

//export default function Home() {
  //return (
    //<div style={{ textAlign: 'center', marginTop: '20vh', fontSize: '2rem' }}>
    //Hello, World!
  //</div>
//);
//}
// app/page.tsx
import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <Header />
      <About />
    </main>
  );
}











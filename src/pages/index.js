import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="inline-flex  items-center justify-between w-full"
        style={{ width: 1113, height: 50 }}
      >
        <div className="flex space-x-4">
          <p className="text-4xl font-bold text-yellow-600">John</p>
          <p className="text-4xl mr-4 font-bold text-red-500">Kioko</p>
        </div>

        <div className="inline-flex space-x-32 items-center justify-end">
          <p className="text-xl text-white">Home</p>
          <p className="text-xl text-white">About</p>
          <p className="text-xl text-white">Services</p>
          <p className="text-xl text-white">Contact</p>
        </div>
      </div>
    </main>
  );
}

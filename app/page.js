import Main from "../components/Main";

export default function Home() {
  return (
    <main className="text-white">
      <div className="m-[3%] h-screen bg-[black] text-center shadow">
        <div className="h-screen border shadow md:mx-40">
          <Main />
        </div>
      </div>
    </main>
  );
}

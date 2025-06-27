import Hero from "./components/Hero";
import VerticalBanner from "./components/VerticalBanner";

function App() {
  return (
    <div className="flex w-[400vw] h-screen overflow-x-auto scroll-smooth snap-x snap-mandatory">
      {/* Page 1: Hero */}
      <section className="w-screen h-screen flex items-center justify-center relative snap-start">
        <Hero />
        <VerticalBanner />
      </section>
      {/* Placeholder for future horizontal pages */}
      <section className="w-screen h-screen bg-gray-100 snap-start" />
      <section className="w-screen h-screen bg-gray-200 snap-start" />
      <section className="w-screen h-screen bg-gray-300 snap-start" />
    </div>
  );
}

export default App;

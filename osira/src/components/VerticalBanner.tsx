const words = ["Assistant", "Agent", "Optimizer", "Manage"];

const VerticalBanner = () => {
  return (
    <div className="absolute right-0 top-0 h-screen w-16 bg-black text-white overflow-hidden">
      <div className="flex flex-col justify-center items-center animate-scrollText h-[200%]">
        {words.concat(words).map((word, i) => (
          <span key={i} className="text-md mb-6 rotate-180 writing-vertical">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VerticalBanner;

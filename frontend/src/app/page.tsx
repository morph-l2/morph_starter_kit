import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[#070E1B] text-gray-200">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-700 bg-gradient-to-b from-[#0F1A2D] to-[#070E1B] pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-800 lg:p-4">
          Morph Holesky Starter Kit
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold text-gray-100">
          Welcome to Morph Holesky starter kit
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        {[
          {
            title: "Docs",
            href: "https://docs.morphl2.io/",
            description:
              "Find in-depth information about Morph Holesky features and API.",
          },

          {
            title: "Explorer",
            href: "https://explorer-testnet.morphl2.io/",
            description:
              "Instantly explore Morph Holesky testnet transactions and blocks.",
          },
          {
            title: "Faucet",
            href: "https://morphfaucet.com/",
            description:
              "Get testnet tokens to start building on Morph Holesky.",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group rounded-lg border border-gray-700 bg-gray-800 px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-gray-100`}>
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm text-gray-400`}>
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

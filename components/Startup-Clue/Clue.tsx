// Component properties
interface AppProps {
  clue: string;
}

/**
 * Startup-clue clue section
 * @param clue - Clue text
 */
export default function ClueSection({ clue }: AppProps): JSX.Element {
  return (
    <section className="mt-4 mx-auto w-80 py-3 px-4 flex flex-col items-center border rounded-xl border-[#eeedf0]">
      <div className="bg-black w-32 py-1 text-center text-white font-helvetica font-bold text-sm uppercase">
        Clue
      </div>
      <p className="mt-2 text-body-3 font-helvetica">{clue}</p>
    </section>
  );
}

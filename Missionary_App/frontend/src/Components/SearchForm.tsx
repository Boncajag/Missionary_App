export function SearchForm() {
  return (
    <form className="flex flex-col self-center px-16 py-8 mt-6 w-full text-base rounded-xl border-2 border-solid border-blue-950 max-w-[361px] text-blue-950">
      <h1 className="self-center text-2xl text-blue-950">Missionary Search</h1>
      <div className="flex flex-col gap-6 mt-12">
        <div className="flex overflow-hidden relative flex-col flex-1 shrink gap-2 self-stretch px-4 py-3 text-lg leading-none whitespace-nowrap aspect-[5.106] basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed224830b4ed223b0761a4f45fac1811ea98c0be18255d9e472056c349809ef?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
            className="object-cover absolute inset-0 size-full"
            alt="Name input background"
          />
          <label>Name</label>
        </div>
        <div className="flex overflow-hidden relative flex-col flex-1 shrink gap-2 self-stretch px-4 py-3 leading-none whitespace-nowrap aspect-[5.854] basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d1029923e680d270a3825bf1648097a52d1eeb597db9be83e75729da77f0fad?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
            className="object-cover absolute inset-0 size-full"
            alt="Mission input background"
          />
          <label>Mission</label>
        </div>
        <div className="flex overflow-hidden relative flex-col flex-1 shrink gap-2 self-stretch px-4 py-3 mt-2 leading-none whitespace-nowrap aspect-[5.854] basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e24812ccbbe70c95600be467648871b2e7d72925340db5cbee00f08dd75aead1?placeholderIfAbsent=true&apiKey=a90227eb987c4a7db18d4ddf65aaf737"
            className="object-cover absolute inset-0 size-full"
            alt="Hometown input background"
          />
          <label>Hometown</label>
        </div>
      </div>
      <button
        type="submit"
        className="overflow-hidden gap-2 self-center px-3 py-3.5 mt-10 max-w-full leading-none whitespace-nowrap rounded-lg border border-solid bg-blue-950 border-zinc-800 min-h-[43px] text-neutral-100 w-[137px]"
      >
        Search
      </button>
    </form>
  );
}

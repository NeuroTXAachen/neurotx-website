import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-2 gap-4">
          <h1 className="text-7xl font-krona text-primary font-bold border-solid border-red-600 border-l-16 p-2 pl-12">
            thinking
            <br />
            the
            <br />
            next
            <br />
            move
          </h1>
          <div className="absolute right-96 top-48">
            <Image
              src={"/images/placeholder-image.jpeg"}
              height={450}
              width={450}
            />
          </div>
        </div>
      </section>
      <section className="p-16 bg-gradient-to-r from-[#050243]  to-[#EC0101] ">
        <div className="absolute left-0 top-36 rotate-12 opacity-70">
          <Image src={"/images/waves.png"} width={1000} height={1000} />
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
          <div className="text-white w-8/12 block">
            <h3 className="text-2xl">NeuroTX Aachen e.V.</h3>
            <p className="">
              We are a student team from Aachen, Germany aiming to cultivate a
              learning environment and to provide hands-on experience in the
              field of neurotechnology, combining interdisciplinary engineering
              fields with neuroscience.
            </p>
          </div>
          <div className="text-white w-9/12 block pt-28">
            <p className="border-solid border-white border-l-4 pl-4">
              Our projects involve mainly brain signal processing, e.g. from
              EEG, and its translation into real-world practical engineering
              applications such as brain-computer interface.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

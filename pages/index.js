import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-16">
        
        <div className=" grid grid-cols-2 gap-4">
          <div className="-z-0 absolute -left-24 top-24 w-128 h-128 bg-gradient-radial from-primary via-white dark:via-secondary "></div>
          <h1 className="z-20 text-8xl font-krona font-bold p-2 pl-12">
            thinking
            <br />
            the
            <br />
            next
            <br />
            move
          </h1>
          <div className="text-xl block p-24">
            <p>
            We are NeuroTX,  a student team from Aachen, Germany aiming to cultivate a learning environment and  hands-on experience in the field of neurotechnology.
            </p>
          </div>
          <div className="z-10 absolute right-48 top-96">
            <Image
              src={"/images/placeholder-image.jpeg"}
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
      <section className="mt-56 p-16">
        <div className="absolute -right-56 top-48 rotate-12 opacity-70">
          <Image src={"/images/waves.png"} width={1000} height={1000} />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center block">
            <h3 className="text-5xl m-12">NeuroTX Aachen e.V.</h3>
            <p className="">
              We are a student team from Aachen, Germany aiming to cultivate a
              learning environment and to provide hands-on experience in the
              field of neurotechnology, combining interdisciplinary engineering
              fields with neuroscience.
            </p>
          </div>
          
        </div>
      </section>
      <section>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </section>
    </div>
  );
}

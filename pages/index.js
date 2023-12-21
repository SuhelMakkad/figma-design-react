import Head from "next/head";
import Heading from "../common/components/heading";
import Separator from "../common/components/separator";
import ImageCarousel from "@/common/components/image-carousel";
import FormFactor from "@/common/components/form-factor";
import PowerAmp from "@/common/components/power-amp";
import FootController from "@/common/components/foot-controller";
import Specs from "@/common/components/specs";
import Footer from "@/common/components/footer";

export default function Home() {
  return (
    <>
      <div className="lg:max-w-6xl max-w-[544px] mx-auto lg:mt-8 md:mt-4 mt-2 px-8 md:px-2 font-[inter]">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <header>
          <Heading>Get your Kemper Profiling Amp</Heading>
          <span className="text-xl text-gray-500">
            All your favorite amps and effects, together in one little box.
          </span>
        </header>

        <Separator className="mt-4 mb-8" />

        <div className="grid lg:grid-cols-2 grid-cols-1 items-start gap-6">
          <section className="col-span-1 lg:sticky top-2">
            <ImageCarousel />
          </section>

          <section className="col-span-1">
            <span className="text-xl text-gray-500">Starting at</span>

            <Heading>$1,799</Heading>

            <div className="space-y-4 mt-2">
              <p className="text-lg text-gray-900">
                The KEMPER PROFILER™ is the leading-edge digital guitar
                amplifier and all-in-one effects processor.
              </p>

              <p className="text-gray-500 text-base">
                Hailed as a game-changer by guitarists the world over, the
                PROFILER™ is the first digital guitar amp to really nail the
                full and dynamic sound of a guitar or bass amp.
              </p>

              <p className="text-gray-500 text-base">
                This is made possible by a radical, patented technology and
                concept which we call "PROFILING".
              </p>
            </div>

            <div className="mt-6">
              <FormFactor />
            </div>

            <div className="mt-6">
              <PowerAmp />
            </div>

            <div className="mt-6">
              <FootController />
            </div>

            <div className="mt-6">
              <Specs />
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

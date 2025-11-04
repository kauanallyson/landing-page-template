import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import dogImage from '../../../public/hero-dog.webp';
import catImage from '../../../public/cat-hero.png';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImage}
          alt="foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 md:hidden"></Image>
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Seu Pet merece todo o cuidado e atenção!
            </h1>

            <p className="lg:text-lg">
              Teu cachorro precisa de banho também meu patrão!
            </p>

            <a
              href="#"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 mr-1 rounded-md">
                  5%
                </b>
                de desconto na primeira compra!
              </p>
            </div>

            <div className="flex mt-4">
              <div className="w-32 hidden md:block">
                <Image
                  src={catImage}
                  alt="foto do gato"
                  quality={100}
                  className="object-fill"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={dogImage}
              alt="foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}

import Image from 'next/image';
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';
import { Check, MapPin } from 'lucide-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            data-aos="flip-down"
            data-aos-delay="500"
            className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="imagem 1 dog"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white rounded-lg overflow-hidden">
              <Image
                src={about2Img}
                alt="imagem gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>Melhor petshop da cidade!</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 20XX!
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de X veterinários!
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Preços que cabem no seu bolso!
              </li>
            </ul>
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="flex gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] font-semibold text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className="font-semibold text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

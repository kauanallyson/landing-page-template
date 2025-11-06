'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tutor1 from '../../../public/tutor1.png';
import tutor2 from '../../../public/tutor2.png';
import tutor3 from '../../../public/tutor3.png';

const testimonials = [
  {
    content:
      '"O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região."',
    author: 'Rafael',
    role: 'Tutor do Thor (Bulldog Francês)',
    image: tutor1,
  },
  {
    content:
      '"Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!"',
    author: 'Mariana Souza',
    role: 'Tutora da Luna (Golden Retriever)',
    image: tutor2,
  },
  {
    content:
      '"Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles."',
    author: 'Camila fernandes',
    role: 'Tutora da Mel (Shih Tzu) e do Max (Beagle)',
    image: tutor3,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Depoimentos dos nossos clientes
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden rounded-2xl"
            ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 select-none">
                      <div
                        data-aos="zoom-out"
                        className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                          quality={100}
                        />
                      </div>
                      <p
                        data-aos="flip-up"
                        data-aos-delay="300"
                        className="text-gray-200">
                        {item.content}
                      </p>
                      <div
                        data-aos="flip-down"
                        data-aos-delay="1000">
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="bg-white border-2 border-gray-500 flex items-center justify-center rounded-full shadow-lg h-10 w-10 absolute left-3 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white border-2 border-gray-500 flex items-center justify-center rounded-full shadow-lg h-10 w-10 absolute -right-6 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}

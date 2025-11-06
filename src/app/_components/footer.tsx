import royal from '../../../public/royal.png';
import golden from '../../../public/golden.png';
import primier from '../../../public/primier.png';
import natural from '../../../public/natural.png';
import whiskas from '../../../public/whiskas.png';
import Image from 'next/image';
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react/dist/ssr';

const brands = [
  { name: 'Royal Canin', logo: royal },
  { name: 'Golden', logo: golden },
  { name: 'Primier', logo: primier },
  { name: 'Formula Natural', logo: natural },
  { name: 'Whiskas', logo: whiskas },
  { name: 'Golden', logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-8 text-white px-4">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Nossos parceiros
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{ width: 'auto', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">PetShop Exemplo</h3>
            <p className="font-sm mb-4">
              Cuidando dos seus melhores <b>au</b>migos
            </p>
            <a
              href="#"
              className="flex justify-center items-center bg-green-500 px-4 py-2 rounded-md">
              <WhatsappLogoIcon className="w-5 h-5 mr-2 text-white" />
              Fale com um atendente pelo Whatsapp!
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              Contatos
            </h3>
            <p>Email: petshop@teste.com</p>
            <p>Telefone: (XX) X XXXX-XXXX</p>
            <p>Rua Teste XXX, Centro - Sobral | CE</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              Redes Sociais
            </h3>
            <div className="flex gap-4 items-center justify-center">
              <a
                href="#"
                target="_blank">
                <FacebookLogoIcon className="w-8 h-8" />
              </a>
              <a
                href="#"
                target="_blank">
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a
                href="#"
                target="_blank">
                <TiktokLogoIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

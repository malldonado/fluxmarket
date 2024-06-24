import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import Image from "next/image";

const ProductDescription: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex">
      <div className="w-[50%]">
        <Image width={500} height={500} src="/img/product.svg" alt="Product" />
      </div>
      <div className="w-[50%] flex items-center">
        <div>
          <span className="text-left font-bold mb-2 text-[24px] flex justify-start items-center">
            <Image
              width={50}
              height={50}
              src="/img/profile.svg"
              alt="Profile"
            />
            Kit para Vinho Xadrez 4 peças
          </span>
          <span className="text-left font-normal mb-2 block mt-5">
            Para você que é amante de Vinho e curte um bom jogo de xadrez esse
            kit é ideal. Sem contar que seu designer diferenciado traz beleza e
            design impecável para a sua mesa. É muita diversão acompanhada de um
            bom vinho.
          </span>
          <div className="flex mt-6 items-center">
            <span className="text-[14px]">Categoria:</span>
            <span className="text-[#0850dd] font-semibold ml-2 text-[16px]">
              Decoração
            </span>
          </div>
          <span className="mt-6 block h-[50px] w-full text-[#0850dd] font-semibold">
            Aproveite! Possuímos apenas 8 unidades em estoque!
          </span>
          <span className="flex items-center">
            <CiCreditCard1 className="mr-1 text-[25px]" />
            Formas de pagamento
          </span>
          <button className="text-white font-bold bg-[#2144e1] mt-8 w-[120px] flex justify-center items-center h-[45px] rounded-[8px] text-[14px] outline-none">
            TO ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

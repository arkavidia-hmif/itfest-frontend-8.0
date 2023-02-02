import Header from "@/components/Katalog-Merch/Header";
import React from "react";

interface KatalogMerchPageProps {}

const KatalogMerch : React.FC<KatalogMerchPageProps> = () => {
  return (
    <div className="min-h-screen flex flex-col h-full">
      <Header />

      {/* Wording Components */}
      <div className="py-3 px-12">
        <p className="font-helvetica">
          Lihat perhitungan poin untuk penukaran merchandise pilihanmu!
        </p>
      </div>
    </div>
  );
};

export default KatalogMerch;
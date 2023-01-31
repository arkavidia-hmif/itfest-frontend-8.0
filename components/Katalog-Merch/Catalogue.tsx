import React from 'react';
import Header from './Header';

const Catalogue = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

export default Catalogue;
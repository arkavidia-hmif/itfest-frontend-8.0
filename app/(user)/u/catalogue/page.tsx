import CatalogueItem from '@/components/Katalog/CatalogueItem';
import Header from '@/components/Katalog/Header';
import InfoCard from '@/components/Katalog/InfoCard';
import Searchbar from '@/components/Katalog/Searchbar';
import UserPointsHighlight from '@/components/Katalog/UserPointsHighlight';
import React from 'react';

const KatalogPage: React.FC = () => {
  const dummyCalagoueData = [
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
    {
      name: 'Kaos mentor',
      startup: 'Startup Startip',
      price: 100000,
      stock: 20,
    },
  ];

  return (
    <div>
      <Header title="Merchandise" />
      <div className="p-4">
        <InfoCard>
          Silakan langsung tukarkan poin dengan merchandise di booth Startup!
        </InfoCard>
        <div className="flex items-center gap-5 mt-2">
          <Searchbar placeholder="Masukkan merchandise" />
          <UserPointsHighlight />
        </div>
        {dummyCalagoueData.map((data, idx) => (
          <CatalogueItem
            key={idx}
            name={data.name}
            price={data.price}
            startup={data.startup}
            stock={data.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default KatalogPage;

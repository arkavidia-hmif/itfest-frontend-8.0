import CatalogueItem from '@/components/katalog/CatalogueItem';
import Header from '@/components/katalog/Header';
import InfoCard from '@/components/katalog/InfoCard';
import Searchbar from '@/components/katalog/Searchbar';
import UserPointsHighlight from '@/components/katalog/UserPointsHighlight';
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

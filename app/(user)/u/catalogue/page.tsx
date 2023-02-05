'use client';

import CatalogueItem from '@/components/Catalogue/CatalogueItem';
import Header from '@/components/Catalogue/Header';
import InfoCard from '@/components/Catalogue/InfoCard';
import Searchbar from '@/components/Catalogue/Searchbar';
import UserPointsHighlight from '@/components/Catalogue/UserPointsHighlight';
import { getAllMerch } from '@/services/merchandise';
import React, { useEffect, useState } from 'react';

interface CatalogueData {
  id: number;
  name: string;
  stock: number;
  point: number;
}

const KatalogPage: React.FC = () => {
  const [catalogueData, setCatalogueData] = useState<CatalogueData[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getAllMerch();
        const responseData = res.data;
        const mappedData = responseData.map((data: any) => {
          return {
            id: data.ID,
            name: data.name,
            stock: data.stock,
            point: data.point,
          };
        });

        setCatalogueData(mappedData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAll();
  }, []);

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
        {catalogueData.map((data) => (
          <CatalogueItem
            key={data.id}
            name={data.name}
            price={data.point}
            startup="Startup"
            stock={data.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default KatalogPage;

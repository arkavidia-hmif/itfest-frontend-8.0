'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

//assets imports
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import ListHistoryPoint from '@/components/ListHistoryPoint';
import { getHistory } from '@/services/point';
import moment from 'moment';

interface ListData {
  status?: string;
  point?: number;
  date?: string;
  name?: string;
}

const HistoryPoint: React.FC = () => {
  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getHistory();
        const responseData = res.data;
        const mappedData = responseData.map((data: any) => {
          return {
            status: "received",
            point: data.point,
            date: moment(data.createdAt).format('LLL'),
            name: data.from.Name,
          };
        });

        setListData(mappedData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAll();
  }, []);


  return (
    <>
      <div className="bg-white">
        <div className="flex">
          <div className="mt-5 ml-4">
            <Image src={LeftArrow} alt="Left Arrow" />
          </div>
          <div className="ml-3 mt-5">
            <h6>POINT</h6>
            <h6>HISTORY</h6>
          </div>{' '}
        </div>
        <div className="mt-5"></div>
        {listData.map((data) => (
          <div className="divide-y divide-slate-700">
            <ListHistoryPoint
              status={data.status}
              name={data.name}
              point={data.point}
              date={data.date}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HistoryPoint;

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//assets imports
import LeftArrow from '@/public/icons/left-arrow-icon.svg';
import ListHistoryPoint from '@/components/ListHistoryPoint';
import { getHistory } from '@/services/point';
import moment from 'moment/moment';
import { useAuth } from '@/context/AuthContext';

interface ListData {
  status?: string;
  point?: number;
  date?: string;
  name?: string;
}
const GrantPointHistory: React.FC = () => {
  const { getUser } = useAuth();
  const user = getUser();
  const [listData, setListData] = useState<ListData[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getHistory();
        const responseData = res.data;
        const mappedData = responseData.map((data: any) => {
          if (user.usercode == data.from.Usercode) {
            return {
              status: "sent",
              point: data.point,
              date: moment(data.CreatedAt).format('LLL'),
              name: data.to.Name,
            };
          } else if (user.usercode == data.to.Usercode){
            return {
              status: "received",
              point: data.point,
              date: moment(data.CreatedAt).format('LLL'),
              name: data.from.Name,
            };
          }
        });

        setListData([...mappedData].reverse());
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
          <Link className="mt-5 ml-4" href="/s/dashboard">
            <Image src={LeftArrow} alt="Left Arrow" className='hover:cursor-pointer' />
          </Link>
          <div className="ml-3 mt-5">
            <h6>GRANT POINT</h6>
            <h6>HISTORY</h6>
          </div>{' '}
        </div>
        <div className="mt-5"></div>
        {listData.map((data, id) => (
          <div className="divide-y divide-slate-700" key={id}>
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

export default GrantPointHistory;

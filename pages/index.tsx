import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';

interface Equip {
  id: number;
  name: string;
}

export default function Page() {
  const [equipList, setEquipList] = useState<Equip[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEquip = async () => {
      try {
        const response = await fetch('/api/getEquip');
        const data: Equip[] = await response.json();
        setEquipList(data);
      } catch (err) {
        console.error('Error fetching equipment:', err);
        setError('Failed to fetch equipment data.');
      }
    };

    fetchEquip();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(equipList);

  return (
    <Layout>
      <div>
        <h1>Equip List</h1>
        <ul>
          {equipList.map((equip, index) => (
            <li key={index}>
            <div className='flex items-center'>
              <Image 
                src={`https://maplestory.io/api/TWMS/250/item/${equip.id}/icon`} 
                alt={equip.name} 
                width={34}
                height={34}
              />
              <h3>{equip.name}</h3>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
import { promises as fs } from 'fs';

import MainGrid from '@/components/MainGrid';
const isDevelopment = process.env.NODE_ENV === 'development';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + (isDevelopment ? '/src/data_local.json' : '/src/data.json'), 'utf8');
  const data = JSON.parse(file);

  return (
    <main className='w-full'>
      <MainGrid data={data} />
    </main>
  );
}

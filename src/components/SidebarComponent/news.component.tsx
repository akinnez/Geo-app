import { lazy } from 'react';
import { useGetApi } from '../../hooks/useApi';
import Card from '../card';
import TitleHead from '../titleHead';

const Loading = lazy(() => import('../../components/loading'));

function NewsComponent({ search }: { search?: string }) {
  let date = new Date();
  let from =
    date.getFullYear() +
    '-' +
    `${
      date.getMonth() + 1 < 9
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
    }` +
    '-' +
    `${date.getDate() < 9 ? '0' + date.getDate() : date.getDate()}`;

  const [data, loading, error] = useGetApi('http://localhost:5173/api/news', {
    params: {
      country: `${search?.toLowerCase()}`,
      from: from,
      apiKey: import.meta.env['VITE_NewsApi_Key'],
    },
  });

  console.log(data, loading);

  if (loading) {
    return <Loading />;
  }

  if (error && error?.response.status == 500) {
    return <h1 className="text-lg text-center">Ops...Something went wrong</h1>;
  }

  return (
    <>
      <TitleHead title="Top Headlines" />
      <div>
        {data.articles.map((e: any, i: number) => (
          <Card key={i} styles="shadow-lg shadow-background my-5">
            <div className="md:flex md:gap-x-5 p-5 items-center">
              <img
                src={e?.urlToImage}
                alt={e?.title}
                className="lg:max-w-[300px] lg:max-h-[250px] rounded-md"
              />
              <a href={e.url}>
                <div className="py-5 px-3">
                  <h1 className="font-bold">{e?.title}</h1>
                  <span className="my-3">{e?.description}</span>
                  <div className="italic my-3">
                    <p className="text-base">
                      Author: {e?.author || 'Anonymous'}
                    </p>
                    <p>Source: {e?.source?.name}</p>
                  </div>
                </div>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default NewsComponent;

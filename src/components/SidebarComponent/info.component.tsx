import { useGetApi } from '../../hooks/useApi';
import Loading from '../loading';
import TitleHead from '../titleHead';

function InfoComponent({ search }: { search: string }) {
  let extracts: string = '';
  let title: string = '';
  // const [extract, setExtract] = useState<any>({});
  const [data, loading, error] = useGetApi('http://localhost:5173/api/wiki', {
    params: {
      action: 'query',
      origin: '*',
      format: 'json',
      prop: 'extracts',
      exintro: '',
      titles: `${search}`,
    },
  });
  console.log(data, loading, error);

  if (loading) {
    return <Loading />;
  }
  if (error && error?.response.status == 500) {
    return (
      <h1 className="text-lg text-center h-full">Ops...Something went wrong</h1>
    );
  }
  if (!loading) {
    let sub: any = Object.values(data?.query.pages)[0];
    title = sub.title;
    extracts = sub.extract;
  }

  return (
    <>
      {data && (
        <>
          <TitleHead title={title} />
          <div
            className="my-5"
            dangerouslySetInnerHTML={{ __html: extracts }}
          ></div>
        </>
      )}
    </>
  );
}

export default InfoComponent;

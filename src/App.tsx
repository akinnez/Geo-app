import {
  lazy,
  Suspense,
  useState,
  // useMemo,
  useEffect,
  // ElementRef,
} from 'react';

import MapComponent from './components/map';

import { getLocation } from './utils/geolocation';
import SelectDropdown from './components/select-dropdown';

import { useGetApi } from './hooks/useApi';

import { filterGeoJson } from './utils/filterGeoJson';
import Sidenav from './components/sidenav';

const Modal = lazy(() => import('./components/modal'));
const Info = lazy(() => import('./components/SidebarComponent/info.component'));
const News = lazy(() => import('./components/SidebarComponent/news.component'));
const Loading = lazy(() => import('./components/loading'));

function App() {
  const [lats, setLat] = useState<number>(0);
  const [longs, setLong] = useState<number>(0);
  const [sidebarValue, setSidebarValue] = useState('');
  const [filterData, setFilterData] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const [data, loading] = useGetApi('/data/countryBorders.geo.json');
  console.log(data, loading);

  function onChange(e: any) {
    const filter: any = filterGeoJson(data['features'], e.target.value);
    console.log(filter);

    setFilterData(filter);
  }
  //current location
  useEffect(() => {
    getLocation(setLat, setLong);
  }, [lats, longs]);

  if (loading) {
    return <Loading />;
  }
  function openModal(e: any) {
    setSidebarValue(e);
  }

  return (
    <>
      <div className="flex justify-center ">
        <SelectDropdown
          styles="rounded-xl absolute z-10 mt-10 w-fit mx-auto"
          dropdownList={data['features']}
          onChange={onChange}
        />
      </div>
      <div>
        <Sidenav
          setOpen={setOpen}
          getData={openModal}
          filterData={filterData}
        />
      </div>
      <div className="relative z-0">
        <MapComponent center={[lats, longs]} geoData={filterData || null} />
      </div>
      <Suspense fallback={<Loading />}>
        {open && (
          <Modal open={open} setOpen={setOpen}>
            {sidebarValue.includes('Info') && (
              <Info search={filterData?.properties?.name} />
            )}
            {sidebarValue.includes('News') && (
              <News search={filterData?.properties?.iso_a2} />
            )}
          </Modal>
        )}
      </Suspense>
    </>
  );
}

export default App;

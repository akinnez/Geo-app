import NewsIcon from './icons/news-icon';
import Weather from './icons/weather';
import CurrencyConversion from './icons/currency-conversion';
import Info from './icons/wiki-info';
import Button from './button';

function Sidenav({
  getData,
  setOpen,
  filterData,
}: {
  getData?: any;
  setOpen?: any;
  filterData?: object;
}) {
  const SidenavList = [
    { name: 'Country Info', icon: <Info styles="h-8 w-8 fill-current" /> },
    { name: 'News', icon: <NewsIcon styles="h-8 w-8 fill-current" /> },
    { name: 'Weather', icon: <Weather styles="h-8 w-8 fill-current" /> },
    {
      name: 'Currency Conversion',
      icon: <CurrencyConversion styles="h-8 w-8 fill-current" />,
    },
  ];

  function clickAction(value: any) {
    getData(value);
    filterData && setOpen(true);
  }

  return (
    <>
      <header className="fixed z-50 w-full lg:w-fit lg:flex lg:items-center lg:h-screen bottom-0 lg:right-0">
        <ul className="lg:w-fit lg:px-5 lg:py-10 lg:mx-8 flex lg:flex-col lg:static justify-center gap-x-10">
          {SidenavList.map((t) => (
            <li
              key={t.name}
              className="py-2 my-5 px-3 cursor-pointer"
              title={t.name}
            >
              <Button click={() => clickAction(t.name)}>{t.icon}</Button>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}

export default Sidenav;

import React from 'react';
import { ToObservable } from '../services/toObservable';
import { map } from 'rxjs';

function SelectDropdown({
  dropdownList,
  styles,
  onChange,
}: {
  onChange?: any;
  dropdownList?: Array<any>;
  styles?: string;
}) {
  let properties: any[] = [];
  let sub = ToObservable(dropdownList)
    .pipe(map((e) => e.properties))
    .subscribe({
      next: (res: any) => {
        properties.push(res);
      },
    });
  sub.unsubscribe();
  return (
    <>
      <select
        className={`px-5 py-4 outline-none border-none text-lg ${styles}`}
        onChange={onChange}
      >
        <option value="" className="text-lg">
          Select a country
        </option>
        {properties.length != 0 &&
          properties.map((w, i) => (
            <option key={i} value={w.iso_a3} className="text-lg">
              {w.name}
            </option>
          ))}
      </select>
    </>
  );
}
export default SelectDropdown;

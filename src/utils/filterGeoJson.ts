import { find } from 'rxjs';
import { ToObservable } from '../services/toObservable';

export function filterGeoJson(dataSet: any, selectedCountry: string) {
  let filterData = {};
  let subscribe = ToObservable(dataSet)
    .pipe(find((f) => f.properties.iso_a3 == selectedCountry))
    .subscribe({
      next: (res) => {
        filterData = res;
      },
    });

  subscribe.unsubscribe();
  return filterData;
}

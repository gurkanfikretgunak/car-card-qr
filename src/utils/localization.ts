import vehicleData from '../data/vehicle-info.json';
import vehicleDataLocalized from '../data/vehicle-info-localized.json';

export function getLocalizedVehicleData(lang: 'tr' | 'en') {
  // Use localized data if available, otherwise fall back to original data
  if (lang in vehicleDataLocalized) {
    return vehicleDataLocalized[lang as keyof typeof vehicleDataLocalized];
  }
  return vehicleData;
}

export function getLocalizedContactReasons(lang: 'tr' | 'en') {
  const data = getLocalizedVehicleData(lang);
  return data.contactReasons.map(reason => ({
    ...reason,
    label: reason.label
  }));
}

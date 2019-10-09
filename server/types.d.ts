export interface IManufacturer {
  name: string;
  models: Array<{uuid: number, name: string}>;
  uuid: number;
}

export interface ICar {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number,
    unit: 'km'
  };
  fuelType: string;
  pictureUrl: string;
}
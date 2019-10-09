export interface InterfaceCar {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: {
    number: number;
    unit: 'km';
  };
  fuelType: string;
  pictureUrl: string;
  status?: string;
}

declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare interface InterfaceAction<P> {
  type: string;
  payload: P;
}

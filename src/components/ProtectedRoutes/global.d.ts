declare module "js-cookie" {
  const Cookies: {
    get(name: string): string | undefined;
    set(name: string, value: string, options?: object): void;
    remove(name: string): void;
    // Add any other methods or types you need
  };
  export default Cookies;
}

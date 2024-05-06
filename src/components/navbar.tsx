import { Button } from "./button";

export const Navbar = () => {
  return (
    <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between">
      <div className="flex gap-2 h-full">
        <a href="/">
          <h2 className="font-bold">Inicio</h2>
        </a>
      </div>

      <div className="flex gap-4 lg:ml-auto">
        <a href="/">
          <Button variant={"outline"}>Solicitar servicio</Button>
        </a>
      </div>
    </div>
  );
};

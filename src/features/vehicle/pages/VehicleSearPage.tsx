import { useState, useEffect, type SubmitEventHandler, useMemo } from 'react';
import dataRaw from '../../../data/vehicles.json'; // Importación directa
import type { VehicleData } from '../types/types';

const VehicleSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [error, setError] = useState('');

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Cast de la data importada al tipo definido
  const allVehicles = dataRaw as VehicleData[];

  const handleSearch: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setError('');

    // Buscamos ignorando mayúsculas/minúsculas y espacios
    const found = allVehicles.find(
      v => v.plate.replace(/-/g, '').toLowerCase() === searchTerm.replace(/-/g, '').toLowerCase()
    );

    if (found) {
      setVehicle(found);
    } else {
      setVehicle(null);
      setError('Vehículo no encontrado. Revisa la placa.');
    }
  };

  const sortedServices = vehicle?.services
    ? [...vehicle.services].sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
    : [];

  const WA_PREFIX = "https://wa.me/";
  const WA_NUMBER = "51925988464"; // tu número

  const whatsappLink = useMemo(() => {
    if (!vehicle) return "#";

    const msg = `Hola, consulté la placa ${fmtPlate(
      vehicle.plate
    )}. ¿Podrían confirmarme el próximo mantenimiento y costos?`;

    return `${WA_PREFIX}${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [vehicle]);

  useEffect(() => {
    if (vehicle?.plate) {
      localStorage.setItem("last_plate", vehicle.plate);
    }
  }, [vehicle]);

  return (
    <div>
      <form onSubmit={handleSearch} className="max-w-2xl w-full mx-auto flex items-center gap-3 mb-6">
        <input
          type="text"
          className="w-full px-3.5 py-3 rounded-xl border outline outline-transparent border-vulcan-900 hover:border-pumpkin-500 hover:outline-pumpkin-500 focus:border-pumpkin-500 focus:outline-pumpkin-500 transition duration-200 "
          placeholder="ABC-123"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
        />
        <button type="submit" className="bg-pumpkin-300 text-vulcan-950 font-semibold px-3.5 py-3 rounded-xl cursor-pointer hover:bg-pumpkin-400 transition duration-200">
          Consultar
        </button>
      </form>

      {error &&
        <div className="max-w-5xl mx-auto bg-vulcan-900/20 p-6 rounded-2xl flex flex-col items-center gap-3.5">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_87_55" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_87_55)">
              <path d="M9.4375 18.9375C9.14583 18.8958 9 18.75 9 18.5C9 18.2167 9.14583 17.9792 9.4375 17.7875C9.72917 17.5958 10.0833 17.5 10.5 17.5C10.9167 17.5 11.2708 17.5958 11.5625 17.7875C11.8542 17.9792 12 18.2167 12 18.5C12 18.75 11.8542 18.8958 11.5625 18.9375C11.2708 18.9792 10.9167 19 10.5 19C10.0833 19 9.72917 18.9792 9.4375 18.9375ZM17.4375 20.9375C17.1458 20.8958 17 20.75 17 20.5C17 20.2167 17.1458 19.9792 17.4375 19.7875C17.7292 19.5958 18.0833 19.5 18.5 19.5C18.9167 19.5 19.2708 19.5958 19.5625 19.7875C19.8542 19.9792 20 20.2167 20 20.5C20 20.75 19.8542 20.8958 19.5625 20.9375C19.2708 20.9792 18.9167 21 18.5 21C18.0833 21 17.7292 20.9792 17.4375 20.9375ZM12.4375 20.9375C12.1458 20.8958 12 20.75 12 20.5C12 20.2167 12.1458 19.9792 12.4375 19.7875C12.7292 19.5958 13.0833 19.5 13.5 19.5C13.9167 19.5 14.2708 19.5958 14.5625 19.7875C14.8542 19.9792 15 20.2167 15 20.5C15 20.75 14.8542 20.8958 14.5625 20.9375C14.2708 20.9792 13.9167 21 13.5 21C13.0833 21 12.7292 20.9792 12.4375 20.9375ZM4.4375 20.9375C4.14583 20.8958 4 20.75 4 20.5C4 20.2167 4.14583 19.9792 4.4375 19.7875C4.72917 19.5958 5.08333 19.5 5.5 19.5C5.91667 19.5 6.27083 19.5958 6.5625 19.7875C6.85417 19.9792 7 20.2167 7 20.5C7 20.75 6.85417 20.8958 6.5625 20.9375C6.27083 20.9792 5.91667 21 5.5 21C5.08333 21 4.72917 20.9792 4.4375 20.9375ZM8.4375 21.9375C8.14583 21.8958 8 21.75 8 21.5C8 21.2167 8.14583 20.9792 8.4375 20.7875C8.72917 20.5958 9.08333 20.5 9.5 20.5C9.91667 20.5 10.2708 20.5958 10.5625 20.7875C10.8542 20.9792 11 21.2167 11 21.5C11 21.75 10.8542 21.8958 10.5625 21.9375C10.2708 21.9792 9.91667 22 9.5 22C9.08333 22 8.72917 21.9792 8.4375 21.9375ZM6 16V16.5C6 16.9167 5.85417 17.2708 5.5625 17.5625C5.27083 17.8542 4.91667 18 4.5 18C4.08333 18 3.72917 17.8542 3.4375 17.5625C3.14583 17.2708 3 16.9167 3 16.5V9.5C3 9.33333 3.01667 9.17083 3.05 9.0125C3.08333 8.85417 3.125 8.69167 3.175 8.525L5.1 3C5.2 2.7 5.37917 2.45833 5.6375 2.275C5.89583 2.09167 6.18333 2 6.5 2H17.5C17.8167 2 18.1042 2.09167 18.3625 2.275C18.6208 2.45833 18.8 2.7 18.9 3L20.825 8.525C20.875 8.69167 20.9167 8.85417 20.95 9.0125C20.9833 9.17083 21 9.33333 21 9.5V16.5C21 16.9167 20.8542 17.2708 20.5625 17.5625C20.2708 17.8542 19.9167 18 19.5 18C19.0833 18 18.7292 17.8542 18.4375 17.5625C18.1458 17.2708 18 16.9167 18 16.5V16H6ZM5.8 7H18.2L17.15 4H6.85L5.8 7ZM7.5 13C7.91667 13 8.27083 12.8542 8.5625 12.5625C8.85417 12.2708 9 11.9167 9 11.5C9 11.0833 8.85417 10.7292 8.5625 10.4375C8.27083 10.1458 7.91667 10 7.5 10C7.08333 10 6.72917 10.1458 6.4375 10.4375C6.14583 10.7292 6 11.0833 6 11.5C6 11.9167 6.14583 12.2708 6.4375 12.5625C6.72917 12.8542 7.08333 13 7.5 13ZM16.5 13C16.9167 13 17.2708 12.8542 17.5625 12.5625C17.8542 12.2708 18 11.9167 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10C16.0833 10 15.7292 10.1458 15.4375 10.4375C15.1458 10.7292 15 11.0833 15 11.5C15 11.9167 15.1458 12.2708 15.4375 12.5625C15.7292 12.8542 16.0833 13 16.5 13Z" fill="#FF860A" />
            </g>
          </svg>
          <span className="text-pumpkin-300">{error}</span>

        </div>}
      {
        vehicle && (
          <div className="max-w-5xl mx-auto bg-vulcan-900/20 p-6 rounded-2xl flex flex-col items-start gap-3.5">
            <h2 className="text-lg font-semibold">Resultado</h2>
            <div className="flex items-center gap-4">
              <a href={whatsappLink} className="bg-vulcan-800/30 font-medium px-2 py-1 border border-vulcan-900 rounded-lg cursor-pointer hover:bg-vulcan-900 transition duration-200" target="_blank">Agenda tu mantenimiento</a>
              <button onClick={window.print} className="bg-vulcan-800/30 font-medium px-2 py-1 border border-vulcan-900 rounded-lg cursor-pointer hover:bg-vulcan-900 transition duration-200">Imprimir / Guardar PDF</button>
            </div>
            <hr className="w-full text-vulcan-900" />
            <div className="w-full grid grid-cols-2 border border-vulcan-800 rounded-2xl">
              <div className="flex flex-col gap-3.5 p-3.5 border-r border-b border-vulcan-800">
                <h3 className="font-medium">Cliente</h3>
                <p>{vehicle.client}</p>
              </div>

              <div className="flex flex-col gap-3.5 p-3.5 border-b border-b-vulcan-800">
                <h3 className="font-medium">Vehículo</h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-vulcan-300 text-sm font-medium">MARCA</h4>
                    <p>{vehicle.vehicle.brand}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-vulcan-300 text-sm font-medium">MODELO</h4>
                    <p>{vehicle.vehicle.model}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-vulcan-300 text-sm font-medium">AÑO</h4>
                    <p>{vehicle.vehicle.year}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 p-3.5 border-r border-r-vulcan-800">
                <h4 className="font-medium">Aceite motor</h4>
                <p>{vehicle.oil.brand} {vehicle.oil.spec} {vehicle.oil.viscosity}</p>
              </div>

              <div className="flex flex-col gap-1.5 p-3.5">
                <h4 className="font-medium">Filtros</h4>
                <div className="flex flex-wrap gap-2">
                  {
                    vehicle.filters.map((filter, index) => (

                      <span className="bg-vulcan-800/40 text-sm px-2 py-1 rounded-lg" key={index}>{filter.type} {filter.code}</span>
                    ))
                  }
                </div>
              </div>
            </div>

            <section className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Próximo mantenimiento</h4>
                <div className="bg-pumpkin-400/20 p-3.5 rounded-xl flex flex-col items-start gap-1.5">
                  <span className="bg-pumpkin-700 flex items-center gap-1 px-2 py-1 rounded-md text-sm font-semibold">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_23_120" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <rect width="20" height="20" fill="currentColor" />
                      </mask>
                      <g mask="url(#mask0_23_120)">
                        <path d="M10.6042 14.3959C10.2014 13.9931 10 13.5 10 12.9167C10 12.3334 10.2014 11.8403 10.6042 11.4375C11.0069 11.0347 11.5 10.8334 12.0833 10.8334C12.6667 10.8334 13.1597 11.0347 13.5625 11.4375C13.9653 11.8403 14.1667 12.3334 14.1667 12.9167C14.1667 13.5 13.9653 13.9931 13.5625 14.3959C13.1597 14.7986 12.6667 15 12.0833 15C11.5 15 11.0069 14.7986 10.6042 14.3959ZM4.16667 18.3334C3.70833 18.3334 3.31597 18.1702 2.98958 17.8438C2.66319 17.5174 2.5 17.125 2.5 16.6667V5.00002C2.5 4.54169 2.66319 4.14933 2.98958 3.82294C3.31597 3.49655 3.70833 3.33335 4.16667 3.33335H5V2.50002C5 2.26391 5.07986 2.06599 5.23958 1.90627C5.39931 1.74655 5.59722 1.66669 5.83333 1.66669C6.06944 1.66669 6.26736 1.74655 6.42708 1.90627C6.58681 2.06599 6.66667 2.26391 6.66667 2.50002V3.33335H13.3333V2.50002C13.3333 2.26391 13.4132 2.06599 13.5729 1.90627C13.7326 1.74655 13.9306 1.66669 14.1667 1.66669C14.4028 1.66669 14.6007 1.74655 14.7604 1.90627C14.9201 2.06599 15 2.26391 15 2.50002V3.33335H15.8333C16.2917 3.33335 16.684 3.49655 17.0104 3.82294C17.3368 4.14933 17.5 4.54169 17.5 5.00002V16.6667C17.5 17.125 17.3368 17.5174 17.0104 17.8438C16.684 18.1702 16.2917 18.3334 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33335H4.16667V16.6667ZM4.16667 6.66669H15.8333V5.00002H4.16667V6.66669Z" fill="currentColor" />
                      </g>
                    </svg>
                    IMPORTANTE
                  </span>
                  <p>A los {formatKm(vehicle.next_maintenance.at_km)}, lo que ocurre primero. O el {formatDate(vehicle.next_maintenance.at_date)}</p>
                </div>
              </div>
              <article>
                <h4 className="font-medium mb-2">Notas</h4>
                <div className="bg-vulcan-800/40 p-3.5 rounded-xl flex flex-col items-start gap-1.5">
                  <span className="bg-cyan-700 px-2 py-1 rounded-md text-sm font-medium">OBSERVACIÓN</span>
                  <p>{vehicle.notes}</p>
                </div>
              </article>
            </section>

            <section className="w-full flex flex-col gap-4">
              <h3 className="font-semibold mb-2">Historial de Servicios</h3>
              <div className="flex flex-col gap-4 relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-vulcan-800" />
                {sortedServices.map((service, index) => (
                  <article className="pl-9 relative" key={index}>
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-lg bg-pumpkin-300 flex items-center justify-center text-sm font-bold text-vulcan-950 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="bg-vulcan-800/20 flex flex-col gap-5 p-4 rounded-2xl">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{formatDate(service.date)}</h4>
                          <span className="bg-green-500/20 px-1.5 py-0.5 rounded-md text-green-500">
                            Completado
                          </span>
                        </div>
                        <ul className="list-disc ml-5">
                          {service.work.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-4">
                        {
                          service.media.map((media, index) => (
                            <div key={index}>
                              <p className="text-sm mb-1.5">{media.caption}</p>
                              <div className="min-w-52 max-w-52 w-full h-29.5 bg-vulcan-800/30 rounded-xl overflow-hidden cursor-pointer">
                                <img src={media.url} alt={media.caption} onClick={() => setSelectedImage(media.url)} />
                              </div>
                              <div>
                                {selectedImage && (
                                  <div
                                    className="fixed inset-0 bg-vulcan-950/30 flex items-center justify-center z-50"
                                    onClick={() => setSelectedImage(null)}
                                  >
                                    <div className="max-w-4xl w-full px-4">
                                      <div className="flex items-end justify-end mb-3.5">
                                        <button className="bg-pumpkin-400 p-1.5 rounded-lg text-vulcan-950 hover:bg-pumpkin-500 cursor-pointer transition duration-200">
                                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_85_19" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                              <rect width="20" height="20" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_85_19)">
                                              <path d="M10 11.1667L5.91671 15.25C5.76393 15.4028 5.56949 15.4792 5.33337 15.4792C5.09726 15.4792 4.90282 15.4028 4.75004 15.25C4.59726 15.0972 4.52087 14.9028 4.52087 14.6667C4.52087 14.4306 4.59726 14.2361 4.75004 14.0833L8.83337 10L4.75004 5.91667C4.59726 5.76389 4.52087 5.56944 4.52087 5.33333C4.52087 5.09722 4.59726 4.90278 4.75004 4.75C4.90282 4.59722 5.09726 4.52083 5.33337 4.52083C5.56949 4.52083 5.76393 4.59722 5.91671 4.75L10 8.83333L14.0834 4.75C14.2362 4.59722 14.4306 4.52083 14.6667 4.52083C14.9028 4.52083 15.0973 4.59722 15.25 4.75C15.4028 4.90278 15.4792 5.09722 15.4792 5.33333C15.4792 5.56944 15.4028 5.76389 15.25 5.91667L11.1667 10L15.25 14.0833C15.4028 14.2361 15.4792 14.4306 15.4792 14.6667C15.4792 14.9028 15.4028 15.0972 15.25 15.25C15.0973 15.4028 14.9028 15.4792 14.6667 15.4792C14.4306 15.4792 14.2362 15.4028 14.0834 15.25L10 11.1667Z" fill="currentColor" />
                                            </g>
                                          </svg>
                                        </button>
                                      </div>
                                      <img
                                        src={selectedImage}
                                        className="w-full max-h-[80vh] object-contain rounded-2xl"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )
      }
    </div >
  );
};

export default VehicleSearchPage;

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

const formatKm = (km: number) => {
  return new Intl.NumberFormat("es-PE").format(km) + " km";
};

const fmtPlate = (plate: string) =>
  plate.toUpperCase().replace(/\s+/g, "");
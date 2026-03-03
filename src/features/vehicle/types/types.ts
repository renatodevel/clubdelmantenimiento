//CHAT GPT
// export interface Service {
//     date: string;
//     odometer: number;
//     work: string[];
// }

// export interface Vehicle {
//     plate: string;
//     client: string;
//     vehicle: {
//         brand: string;
//         model: string;
//         year: number;
//         vin: string;
//     };
//     services: Service[];
// }

//GEMINI
export interface Service {
    date: string;
    odometer: number;
    work: string[];
    oil_added_l?: number;
    invoice_url: string;
    media: { type: string; url: string; caption: string }[];
}

export interface VehicleData {
    plate: string;
    client: string;
    vehicle: {
        brand: string;
        model: string;
        year: number;
        vin: string;
    };
    oil: {
        brand: string;
        viscosity: string;
        spec: string;
    };
    filters: { type: string; code: string }[];
    next_maintenance: { at_km: number; at_date: string };
    notes: string;
    services: Service[];
}
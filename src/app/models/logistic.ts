export interface TransportI {
    id?: number;
    transportation: 'PLANE' | 'TRUCK' | 'MOTORBIKE';
    capacity: number;
}

export interface RouteI {
    id?: number;
    origin: string;
    destination: string;
    stops?: string | null;
    transports: TransportI[];
}
  
export interface ServicelI {
    id?: number;
    transportation: 'EXPRESS' | 'NORMAL';
    cost: number;
}
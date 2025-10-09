


export interface Property{
    id: number;
    name: string;
    standardized_unit: string;
    min: number;
    max: number;
}

export interface Clasification {
    clasification_id: number;
    clasification_name: string;
    properties: Property[];
}


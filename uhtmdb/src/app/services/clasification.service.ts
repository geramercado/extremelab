import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Clasification } from "../interface/clasification.model";

@Injectable({
    providedIn: 'root'
})

export class ClasificationService{

 /*   
    private apiUrl = 'http:www.dominio.com';

    constructor(private http: HttpClient){}

    getClasification(): Observable<Clasification[]> {
        return this.http.get<Clasification[]>(this.apiUrl);
    }

    getClasificationById(id: number): Observable<Clasification> {
        return this.http.get<Clasification>(`${this.apiUrl}/${id}`);
    }
    */

    private mockClasification: Clasification[] = [
        {
          clasification_id: 1,
          clasification_name: 'Mechanical properties',
          properties: [
            { id: 101, name: 'Density', standardized_unit: 'kg/m3', min: 500, max: 8000 },
            { id: 102, name: 'Resistance', standardized_unit: 'MPa', min: 50, max: 600 },
            { id: 103, name: 'Hardeness', standardized_unit: 'kg', min: 15, max: 300 },
            { id: 104, name: 'Ductility', standardized_unit: 'W', min: 25, max: 50 }
          ]
        },
        {
          clasification_id: 2,
          clasification_name: 'Thermodynamic properties',
          properties: [
            { id: 201, name: 'Length', standardized_unit: 'cm', min: 10, max: 200 },
            { id: 202, name: 'Pressure', standardized_unit: 'P', min: 5, max: 20 },
            { id: 203, name: 'Volume', standardized_unit: 'p', min: 100, max: 300 },
            { id: 204, name: 'Entropy', standardized_unit: 'S', min: 55, max: 105 }
          ]
        }
      ];
    
      getClasification(): Observable<Clasification[]> {
        return of(this.mockClasification);
      }
    
      getClasificationById(id: number): Observable<Clasification | undefined> {
        const clasif = this.mockClasification.find(c => c.clasification_id === id);
        return of(clasif);
      }

}



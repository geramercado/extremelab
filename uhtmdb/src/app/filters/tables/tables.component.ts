import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTableModule, MatPaginator, MatPaginatorModule
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})




export class TablesComponent implements AfterViewInit {

  displayedColumns: string[] = ['formula', 'clasification', 'hardnes', 'crystals', 'references'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  formula: string;
  clasification: string;
  hardnes: string;
  crystals: string;
  references: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { formula: "SiO₂", clasification: "Silicate", hardnes: "7", crystals: "Hexagonal", references: 5 },
  { formula: "CaCO₃", clasification: "Carbonate", hardnes: "3", crystals: "Trigonal", references: 4 },
  { formula: "NaCl", clasification: "Halide", hardnes: "2.5", crystals: "Cubic", references: 3 },
  { formula: "FeS₂", clasification: "Sulfide", hardnes: "6-6.5", crystals: "Cubic", references: 6 },
  { formula: "Al₂O₃", clasification: "Oxide", hardnes: "9", crystals: "Trigonal", references: 5 },
  { formula: "Mg₃Si₄O₁₀(OH)₂", clasification: "Phyllosilicate", hardnes: "1", crystals: "Monoclinic", references: 2 },
  { formula: "KAl₂(AlSi₃O₁₀)(OH)₂", clasification: "Phyllosilicate", hardnes: "2.5-4", crystals: "Monoclinic", references: 3 },
  { formula: "Fe₂O₃", clasification: "Oxide", hardnes: "5.5-6.5", crystals: "Hexagonal", references: 4 },
  { formula: "CuFeS₂", clasification: "Sulfide", hardnes: "3.5-4", crystals: "Tetragonal", references: 3 },
  {  formula: "ZnS", clasification: "Sulfide", hardnes: "3.5-4", crystals: "Cubic", references: 3 },
  {  formula: "CaSO₄·2H₂O", clasification: "Sulfate", hardnes: "2", crystals: "Monoclinic", references: 3 },
  {  formula: "PbS", clasification: "Sulfide", hardnes: "2.5", crystals: "Cubic", references: 4 },
  {  formula: "MgCO₃", clasification: "Carbonate", hardnes: "3.5-4.5", crystals: "Trigonal", references: 2 },
  {  formula: "Cu₂CO₃(OH)₂", clasification: "Carbonate", hardnes: "3.5-4", crystals: "Monoclinic", references: 3 },
  {  formula: "Ca₅(PO₄)₃(OH,F,Cl)", clasification: "Phosphate", hardnes: "5", crystals: "Hexagonal", references: 4 },
  {  formula: "C", clasification: "Native Element", hardnes: "10", crystals: "Cubic", references: 6 },
  {  formula: "Ag", clasification: "Native Element", hardnes: "2.5-3", crystals: "Cubic", references: 5 },
  {  formula: "Au", clasification: "Native Element", hardnes: "2.5-3", crystals: "Cubic", references: 5 },
  {  formula: "Bi₂Te₃", clasification: "Sulfide", hardnes: "2-2.5", crystals: "Trigonal", references: 3 },
  {  formula: "Fe₃O₄", clasification: "Oxide", hardnes: "5.5-6.5", crystals: "Cubic", references: 4 },
  {  formula: "H₂Mg₃(SiO₃)₄", clasification: "Phyllosilicate", hardnes: "1", crystals: "Monoclinic", references: 2 },
  {  formula: "Al(OH)₃", clasification: "Hydroxide", hardnes: "2.5-3.5", crystals: "Monoclinic", references: 2 },
  {  formula: "(Mg,Fe)₂SiO₄", clasification: "Nesosilicate", hardnes: "6.5-7", crystals: "Orthorhombic", references: 4 },
  {  formula: "KAlSi₃O₈", clasification: "Tectosilicate", hardnes: "6", crystals: "Monoclinic", references: 3 },
  {  formula: "(Ca,Na)₂(Al,Si)₄O₈", clasification: "Tectosilicate", hardnes: "6-6.5", crystals: "Triclinic", references: 3 },
  {  formula: "Be₃Al₂Si₆O₁₈", clasification: "Cyclosilicate", hardnes: "7.5-8", crystals: "Hexagonal", references: 5 },
  {  formula: "ZrSiO₄", clasification: "Nesosilicate", hardnes: "7.5", crystals: "Tetragonal", references: 4 },
  {  formula: "Al₂SiO₅", clasification: "Nesosilicate", hardnes: "5-7", crystals: "Orthorhombic", references: 3 },
  {  formula: "TiO₂", clasification: "Oxide", hardnes: "6-6.5", crystals: "Tetragonal", references: 4 },
  {  formula: "CaWO₄", clasification: "Tungstate", hardnes: "4.5-5", crystals: "Tetragonal", references: 3 },
  {  formula: "BaSO₄", clasification: "Sulfate", hardnes: "3-3.5", crystals: "Orthorhombic", references: 3 },
  {  formula: "CoAsS", clasification: "Sulfide", hardnes: "5.5", crystals: "Orthorhombic", references: 3 },
  {  formula: "UO₂", clasification: "Oxide", hardnes: "5-6", crystals: "Cubic", references: 4 },
  {  formula: "Mg₃(BO₃)₂", clasification: "Borate", hardnes: "5", crystals: "Trigonal", references: 2 },
  {  formula: "FeCO₃", clasification: "Carbonate", hardnes: "3.5-4.5", crystals: "Trigonal", references: 2 },
  {  formula: "Sb₂S₃", clasification: "Sulfide", hardnes: "2", crystals: "Orthorhombic", references: 2 },
  {  formula: "WO₃", clasification: "Tungstate", hardnes: "2.5-3", crystals: "Monoclinic", references: 2 },
  {  formula: "KCl", clasification: "Halide", hardnes: "2", crystals: "Cubic", references: 2 },
  {  formula: "CaF₂", clasification: "Halide", hardnes: "4", crystals: "Cubic", references: 3 },
  {  formula: "S", clasification: "Native Element", hardnes: "1.5-2.5", crystals: "Orthorhombic", references: 4 }
];


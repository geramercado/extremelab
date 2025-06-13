import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  themeSignal = signal<string>("light");

  setTheme(theme: string){
    this.themeSignal.set(theme);
  }

  updateTheme(){
    this.themeSignal.update(value => (value === "dark" ? "light" : "dark"));
  }

  get currentImage(): string {
    return this.themeSignal() === 'dark' ? 'dalle_dark.jpg' : 'dalle.jpg';
  }
  
}



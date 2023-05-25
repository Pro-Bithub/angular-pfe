import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCours'
})
export class FilterCourGroupesPipe implements PipeTransform {
  transform(teachers: any[],language: string,niveaux: string, jour: string, heure: string): any[] {
    if (!teachers) return [];
    
     // Filtre par langue
     if (language && language !== '-- None --') {
      teachers = teachers.filter(teacher => teacher.langues.includes(language));
    }
       // Filtre par langue
       if (niveaux && niveaux !== '-- None --') {
        teachers = teachers.filter(teacher => teacher.niveaux.includes(niveaux));
      }
      if (jour && jour !== '-- None --') {
        teachers = teachers.filter(teacher => teacher.jour.includes(jour));
      }
    
       // Filtre par heure de la leçon
       if (heure && heure !== '-- None --') {
        teachers = teachers.filter(teacher => teacher.time.includes(heure));
      }
       


    
    return teachers;
  }
}

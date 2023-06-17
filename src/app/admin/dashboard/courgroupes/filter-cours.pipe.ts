import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCours'
})
export class FilterCourGroupesPipe implements PipeTransform {
  
  transform(teachers: any[],language: string,niveaux: string, jour: string, heure: string): any[] {
    if (!teachers) return [];
    
     // Filtre par langue
     if (language && language !== '-- None --') {
      teachers = teachers.filter(teacher => teacher.langue.includes(language));
    }
       // Filtre par langue
       if (niveaux && niveaux !== '-- None --') {
        teachers = teachers.filter(teacher => teacher.niveau.includes(niveaux));
      }

      // Objet de mappage des jours de la semaine
    const joursMap = {
      Lundi: 1,
      Mardi: 2,
      Mercredi: 3,
      Jeudi: 4,
      Vendredi: 5,
      Samedi: 6,
      Dimanche: 0
    };

    if (jour && jour !== '-- None --') {
      // Récupérer le numéro du jour de la semaine correspondant à la valeur sélectionnée
      const selectedDayOfWeek = joursMap[jour];
     
    
      teachers = teachers.filter(teacher => {
        const teacherDate = new Date(teacher.date); // Convertir la valeur de teacher.jour en objet Date
  const teacherDayOfWeek = teacherDate.getDay(); // Récupérer le numéro du jour de la semaine (0 pour Dimanche, 1 pour Lundi, etc.)

        // Filtrer les enseignants dont le numéro du jour de la semaine correspond à celui de la valeur sélectionnée
        return teacherDayOfWeek === selectedDayOfWeek;
      });
    }
 
    console.log(heure)
       // Filtre par heure de la leçon
       if (heure && heure !== '-- None --') {
        const [startHour, endHour] = heure.split('-').map(time => time.trim()); // Diviser l'heure de début et l'heure de fin
        teachers =  teachers.filter(teacher => {
          const teacherTime = teacher.horaire;
          return teacherTime >= startHour && teacherTime <= endHour;
        });
      }
       


    
    return teachers;
  }
}

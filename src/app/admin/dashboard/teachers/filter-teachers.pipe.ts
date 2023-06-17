import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTeachers'
})
export class FilterTeachersPipe implements PipeTransform {
  transform(teachers: any[], language: string, categorie: string[], type: string): any[] {
    if (!teachers) return [];
    console.log(teachers)
      // Filtre par langue
    if (language && language !== '-- None --') {
      teachers = teachers.filter(teacher => teacher.languesparlees && teacher.languesparlees.includes(language));
    }

    
    // Filtre par type de professeur
    if (type && type !== 'Le deux') {
        teachers = teachers.filter(teacher => teacher.typedetuteur === type);
      } 
      


      
  // Filtre par catégorie de leçon
    if (categorie && categorie.length > 0) {

        if(!categorie.includes("-- None --")){
            teachers = teachers.filter(teacher => {
          
                const teacherCategories = teacher.categorie;
                console.log("teacherCategories")
                console.log(teacherCategories)
                // Vérifie si au moins une catégorie sélectionnée correspond à une catégorie de l'enseignant
                return categorie.some(selectedCategory => teacherCategories.includes(selectedCategory));
                });
        }
        
    }

/*     
 
    
    // Filtre par heure de la leçon
    if (heure && heure.length > 0) {
      teachers = teachers.filter(teacher => heure.includes(teacher.time));
    }
    */
    
    return teachers;
  }
}

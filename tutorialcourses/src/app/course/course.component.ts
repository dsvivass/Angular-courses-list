import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];

  constructor(private courseService: CourseService) { }

  getCourseList(): Array<Course> {
    return dataCourses
  }

  // Un Observable tiene una función de suscripción, esto significa que quien llama al observable, se suscribe a él.
  // Cuando el método asíncrono termina, se va a ejecutar la suscripción. La suscripción recibe una función y esa función tiene como parámetro el resultado del método asíncrono y en el cuerpo de la función lo que queremos hacer con ese resultado.
  // Si el resultado está en la variable courses (los cursos que devolvió el servicio), lo que queremos hacer es actualizar el atributo de la clase.

  getCourses() {
    this.courseService
      .getCourses()
      .subscribe(courses => {
        this.courses = courses
      });
  }

  ngOnInit() {
    // this.courses = this.getCourseList();
    this.getCourses();
  }

}

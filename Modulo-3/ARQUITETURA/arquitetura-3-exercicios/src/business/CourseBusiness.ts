import { CourseDatabase } from "../database/CourseDatabase"
import { CourseDTO } from "../dtos/CourseDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Course } from "../models/Course"
import { CourseDB } from "../types"

export class CourseBusiness {
    constructor (
        private courseDatabase: CourseDatabase,
        private courseDTO: CourseDTO
    ){}
    public getCourses = async (input: any) => {
        const { q } = input

        const coursesDB = await this.courseDatabase.findCourses(q)

        const courses: Course[] = coursesDB.map((courseDB) => new Course(
            courseDB.id,
            courseDB.name,
            courseDB.lessons
        ))

        return courses
    }

    public createCourse = async (input: any) => {
        const { id, name, lessons } = input

        if (name.length < 2) {
            throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
        }

        if (lessons <= 0) {
            throw new BadRequestError("'lessons' não pode ser zero ou negativo")
        }

        const courseDBExists = await this.courseDatabase.findCourseById(id)

        if (courseDBExists) {
            throw new BadRequestError("'id' já existe")
        }

        const newCourse = new Course(
            id,
            name,
            lessons
        )

        const newCourseDB: CourseDB = {
            id: newCourse.getId(),
            name: newCourse.getName(),
            lessons: newCourse.getLessons()
        }

        await this.courseDatabase.insertCourse(newCourseDB)

        const output = this.courseDTO.createCourseOutput(newCourse)

        return output
    }

    public editCourse = async (input: any) => {
        const {
            idToEdit,
            newId,
            newName,
            newLessons
        } = input

        if (newId !== undefined) {
            if (typeof newId !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
        }
        
        if (newName !== undefined) {
            if (typeof newName !== "string") {
                throw new BadRequestError("'name' deve ser string")
            }

            if (newName.length < 2) {
                throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
            }
        }
        
        if (newLessons !== undefined) {
            if (typeof newLessons !== "number") {
                throw new BadRequestError("'lessons' deve ser number")
            }
    
            if (newLessons <= 0) {
                throw new BadRequestError("'lessons' não pode ser zero ou negativo")
            }
        }

        const courseToEditDB = await this.courseDatabase.findCourseById(idToEdit)

        if (!courseToEditDB) {
            throw new NotFoundError("'id' para editar não existe")
        }

        const course = new Course(
            courseToEditDB.id,
            courseToEditDB.name,
            courseToEditDB.lessons
        )

        newId && course.setId(newId)
        newName && course.setName(newName)
        newLessons && course.setLessons(newLessons)

        const updatedCourseDB: CourseDB = {
            id: course.getId(),
            name: course.getName(),
            lessons: course.getLessons()
        }

        await this.courseDatabase.updateCourse(updatedCourseDB)

        const output = this.courseDTO.editCourseOutput(course)
        return output
    }

    public deleteCourse = async (input: any) => {
        const { idToDelete } = input

        const courseToDeleteDB = await this.courseDatabase.findCourseById(idToDelete)

        if (!courseToDeleteDB) {
            throw new NotFoundError("'id' para deletar não existe")
        }

        await this.courseDatabase.deleteCourseById(courseToDeleteDB.id)

        const output = this.courseDTO.deleteCourseOutput()

        return output
    }
}
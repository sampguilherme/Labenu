import { BadRequestError } from "../errors/BadRequestError"
import { Course } from "../models/Course"

export interface CreateCourseInputDTO{
    id: string,
    name: string,
    lessons: number
}

export interface CreateCourseOutputDTO{
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number
    }
}

export interface EditCourseInputDTO{
    idToEdit: string,
    newId: string | undefined,
    newName: string | undefined,
    newLessons: number | undefined
}

export interface EditCourseOutputDTO{
    message: string
    course: {
        id: string,
        name: string,
        lessons: number
    }
}

export interface DeleteCourseInputDTO{
    idToDelete: string
}

export interface DeleteCourseOutputDTO{
    message: string
}

export class CourseDTO{
    public createCourseInput(
        id: unknown,
        name: unknown,
        lessons: unknown
    ): CreateCourseInputDTO{
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }

        const dto: CreateCourseInputDTO = {
            id,
            name,
            lessons
        }

        return dto
    }
    public createCourseOutput(course: Course): CreateCourseOutputDTO{
        const dto: CreateCourseOutputDTO = {
            message: "Curso registrado com sucesso",
            course: {
                id: course.getId(),
                name: course.getName(),
                lessons: course.getLessons()
            }
        }

        return dto
    }

    public editCourseInput(
        idToEdit: string,
        newId: unknown,
        newName: unknown,
        newLessons: unknown
    ): EditCourseInputDTO{
        if (newId !== undefined) {
            if (typeof newId !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
        }

        if (newName !== undefined) {
            if (typeof newName !== "string") {
                throw new BadRequestError("'name' deve ser string")
            }
        }

        if (newLessons !== undefined) {
            if (typeof newLessons !== "number") {
                throw new BadRequestError("'lessons' deve ser number")
            }
        }
        
        const dto: EditCourseInputDTO = {
            idToEdit,
            newId,
            newName,
            newLessons
        }

        return dto
    }

    public editCourseOutput(course: Course): EditCourseOutputDTO{
        const dto: EditCourseOutputDTO = {
            message: "Curso editado com sucesso",
            course: {
                id: course.getId(),
                name: course.getName(),
                lessons: course.getLessons()
            }
        }
        return dto
    }

    public deleteCourseInput(
        idToDelete: string
    ): DeleteCourseInputDTO{
        const dto: DeleteCourseInputDTO = {
            idToDelete
        }
        return dto
    }

    public deleteCourseOutput():DeleteCourseOutputDTO{
        const dto: DeleteCourseOutputDTO = {
            message: "Curso deletado com sucesso"
        }
        return dto
    }
}
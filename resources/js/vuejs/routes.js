import { createRouter, createWebHistory } from "vue-router";
import Teacher from "../vuejs/page/teacher/index.vue";
import QuestionTeacher from "../vuejs/page/teacher/question.vue";
import Student from "../vuejs/page/student/index.vue";
import Result from "../vuejs/page/teacher/result.vue";
import QuestionQuiz from "../vuejs/page/teacher/questionQuiz.vue";
import Course from "../vuejs/page/student/course.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/admin/add-challenge",
            name: "teacher",
            component: Teacher,
        },
        {
            path: "/admin/add-challenge/:id",
            name: "questionTeacher",
            component: QuestionTeacher,
        },
        {
            path: "/admin/result/:id",
            name: "resultTeacher",
            component: Result,
        },
        {
            path: "/student/challenge",
            name: "student",
            component: Student,
        },
        {
            path: "/admin/quiz/add-question/:id",
            name: "questionQuiz",
            component: QuestionQuiz,
        },
        {
            path: "/course/:id",
            name: "course",
            component: Course,
        }
    ],
});

export default router;

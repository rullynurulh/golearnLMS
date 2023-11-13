import { createRouter, createWebHistory } from 'vue-router'
import Teacher from '../vuejs/page/teacher/index.vue';
import Student from '../vuejs/page/student/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/add-challenge',
            name: 'teacher',
            component: Teacher
        },
        {
            path: '/challenge/student',
            name: 'student',
            component: Student
        }
    ]
})

export default router
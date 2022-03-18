import Success from "./components/Success.vue";
import CardForm from "./components/CardForm.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes=[
    {
        name: 'Success',
        component: Success,
        path: '/success'
    },
    {
        name: 'CreditCardForm',
        component: CardForm,
        path: '/'
    }
]

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
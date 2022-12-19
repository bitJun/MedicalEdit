import { createRouter, createRouterMatcher, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: ()=>import('./views/Home/index.vue')
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router

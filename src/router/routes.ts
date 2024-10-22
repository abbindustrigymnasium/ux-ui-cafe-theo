const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component:() => import('pages/Index.vue') },
      { path: 'cakes', component: () => import('pages/CakesPage.vue') },
      { path: 'cake/:id', component: () => import('pages/CakeDetailsPage.vue') },
      { path: 'staff', component: () => import('pages/StaffPage.vue') },
      { path: 'events', component: () => import('pages/EventsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

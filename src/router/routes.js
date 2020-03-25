
const routes = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'profissional_saude', component: () => import('pages/ProfissionalSaude.vue') },
      { path: 'operador_transporte', component: () => import('pages/OperadorTransportes.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes


const routes = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'campanhas', component: () => import('pages/Campanhas.vue') },
      { path: 'operador_transporte', component: () => import('pages/OperadorTransportes.vue') },
      { path: 'sobre_nos', component: () => import('pages/SobreNos.vue') },
      { path: 'success', component: () => import('pages/Success.vue') }
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

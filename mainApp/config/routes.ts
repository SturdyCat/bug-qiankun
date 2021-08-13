export default [
  { path: '/', redirect: '/main-react' },
  {
    path: '/app-vue*',
    component: './app-vue',
  },
  {
    path: '/app-angular*',
    component: './app-angular',
  },
  {
    path: '/main-react',
    component: './main-react',
  },
];

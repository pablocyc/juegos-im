export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_ODSGyIsa.mjs').then(n => n.i);

export { page };

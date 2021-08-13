import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule> | null;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error({ err }));
  return app;
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount() {
  render();
}

export async function unmount() {
  // @ts-ignore
  app.destroy();
  app = null;
}
/* eslint-disable no-empty */
import type {
  MenuDataItem,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { MicroApp } from 'qiankun';
import { createRef } from 'react';
import { history } from 'umi';
import { sleep } from './utils/utils';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

export const layoutActionRef = createRef<{ reload: () => void }>();

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  microApp?: MicroApp;
}> {
  return {};
}

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    menuItemRender: (menu) => {
      return (
        <div
          onClick={async () => {
            const { pathname } = history.location;
            const from = pathname.split('/')[1];
            const to = menu.path.split('/')[1];
            if (menu.path !== pathname && /^app-/.test(from) && from !== to) {
              initialState!.microApp?.unmount();
              setInitialState({ ...initialState, microApp: undefined });
              await sleep(66);
            }
            history.push(menu.path);
          }}
        >
          {menu.name}
        </div>
      );
    },
    menuDataRender: (menuData: MenuDataItem[]) => [
      { exact: true, path: '/main-react', name: 'main-react' },
      { exact: true, path: '/app-vue', name: 'app-vue' },
      { exact: true, path: '/app-angular', name: 'app-angular' },
    ],
  };
};

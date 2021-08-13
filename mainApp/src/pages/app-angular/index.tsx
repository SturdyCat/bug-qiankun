
import { useMount } from 'ahooks';
import classNames from 'classnames';
import { loadMicroApp } from 'qiankun';
import { useRef } from 'react';
import { Prompt, useModel } from 'umi';

import styles from './style.less';

export default () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { initialState, setInitialState } = useModel('@@initialState');

  useMount(async () => {
    setInitialState({
      ...initialState,
      microApp:
       loadMicroApp(
        {
          name: 'app-angular',
          entry: '/proxy-angular/',
          container: containerRef.current!,
        },
        {
          singular: true,
        },
      ),
    });
  });

  return (
    <>
      {/* <Prompt
        message={(location) => location.pathname !== '/app-dolphinscheduler/web/app-zeppelin'}
      /> */}
    <div ref={containerRef}  />
    </>
  );
};

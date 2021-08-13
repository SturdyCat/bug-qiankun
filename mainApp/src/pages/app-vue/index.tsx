import { useMount } from 'ahooks';
import { loadMicroApp } from 'qiankun';
import { useRef } from 'react';
import { useModel } from 'umi';

export default () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { initialState, setInitialState } = useModel('@@initialState');

  useMount(async () => {
    setInitialState({
      ...initialState,
      microApp: loadMicroApp(
        {
          name: 'app-vue',
          entry: '/proxy-vue/',
          container: containerRef.current!,
        },
        {
          singular: true,
        },
      ),
    });
  });

  return <div ref={containerRef} style={{ position: 'relative' }} />;
};

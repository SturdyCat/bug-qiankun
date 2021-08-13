import { PageLoading } from '@ant-design/pro-layout';
import { Suspense } from 'react';

export default (props: { children: React.ReactNode }): React.ReactNode => {
  return (
    <div style={{ maxWidth: 1920, margin: '0 auto' }}>
      <Suspense fallback={<PageLoading />}>{props.children}</Suspense>
    </div>
  );
};

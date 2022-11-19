import * as React from 'react';
import { FC } from 'react';
import Components from 'components';

type Props = {
  name: string;
  type?: string;
  props: any;
};

const RenderComponent: FC<Props> = ({ name, props }) => {
  const Component = Components[name];
  console.log('component', Component);
  return <Component {...props} />;
};

export default RenderComponent;

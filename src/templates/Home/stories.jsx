import Home from './index';

export default {
  title: 'Home',
  component: Home,
  args: {
    children: 'Empty',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Home {...args} />;

import type { Meta, StoryObj } from '@storybook/react';
import classMulti from './index';

const meta = {
  title: 'Utils/classMulti',
  component: classMulti,
  parameters: {
	  docs: {
		description: {
		  component: 'Function to combine classnames',
		},
	  }
  },
} satisfies Meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
	svg: false,
	aClass: true,
},
};

export default meta;
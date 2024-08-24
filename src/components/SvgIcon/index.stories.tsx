import type { Meta, StoryObj } from '@storybook/react';
import SvgIcon from './index';

const meta = {
  title: 'Components/SvgIcon',
  component: SvgIcon,
  argTypes: {
	size: {
	  control: 'number',
	},
  },
} satisfies Meta<typeof SvgIcon>;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
	svg: '<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" width="471.55" height="471.55" viewBox="0 0 471.55 471.55" fill="currentColor"><path d="m235.77,123.77c29.92,0,58.04,11.65,79.2,32.8,21.15,21.15,32.8,49.28,32.8,79.2s-11.65,58.04-32.8,79.2c-21.15,21.15-49.28,32.8-79.2,32.8s-58.04-11.65-79.2-32.8c-21.15-21.15-32.8-49.28-32.8-79.2s11.65-58.04,32.8-79.2c21.15-21.15,49.28-32.8,79.2-32.8m0-18c-71.8,0-130,58.2-130,130s58.2,130,130,130,130-58.2,130-130-58.2-130-130-130h0Z"/><rect x="0" y="226.77" width="75.77" height="18" rx="9" ry="9"/><rect x="67.78" y="95.07" width="71.59" height="17.01" rx="8.5" ry="8.5" transform="translate(103.58 -42.9) rotate(45)"/><rect x="197.89" y="28.89" width="75.77" height="18" rx="9" ry="9" transform="translate(273.66 -197.89) rotate(90)"/><rect x="332.18" y="95.07" width="71.59" height="17.01" rx="8.5" ry="8.5" transform="translate(701.41 -83.38) rotate(135)"/><rect x="395.77" y="226.77" width="75.77" height="18" rx="9" ry="9" transform="translate(867.32 471.55) rotate(180)"/><rect x="332.18" y="359.47" width="71.59" height="17.01" rx="8.5" ry="8.5" transform="translate(367.97 888.37) rotate(-135)"/><rect x="197.89" y="424.66" width="75.77" height="18" rx="9" ry="9" transform="translate(-197.89 669.44) rotate(-90)"/><rect x="67.78" y="359.47" width="71.59" height="17.01" rx="8.5" ry="8.5" transform="translate(-229.86 181.02) rotate(-45)"/></svg>'
  },
};

export default meta;
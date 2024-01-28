import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import ColorPicker from "../../components/colorpicker/ColorPicker.vue";

const meta = {
  title: 'Input/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {  }, // default value
  parameters: {

  }
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {
    label: "Checkbox"
  },

};
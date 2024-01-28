import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from "../../components/checkbox/Checkbox.vue";
import Input from "../../components/input/Input.vue";
import TextArea from "../../components/textarea/TextArea.vue";

const meta = {
  title: 'Input/Textarea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {

  },
  args: {  }, // default value
  parameters: {

  }
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
  },

};
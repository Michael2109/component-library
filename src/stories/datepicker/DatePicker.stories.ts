import type {Meta, StoryObj} from '@storybook/vue3';
import DatePicker from "../../components/datepicker/DatePicker.vue";

const meta = {
    title: 'Input/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {},
    args: {}, // default value
    parameters: {}
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
    args: {},

};
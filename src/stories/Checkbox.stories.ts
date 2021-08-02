
import { Story, Meta } from '@storybook/angular';
import { CheckboxComponent } from 'src/app/story-components/checkbox/checkbox.component';

// import CheckBox from './checkbox.component';

export default {
  title: 'Example/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Checkbox',
};
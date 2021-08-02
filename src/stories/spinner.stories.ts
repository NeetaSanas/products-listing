import { Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { SpinnerComponent } from 'src/app/story-components/spinner/spinner.component';

export default {
    title: 'Spinner',
    component: SpinnerComponent
  } as Meta;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
    component: SpinnerComponent,
    props: args,
});

export const size = Template.bind({});
size.args = {
  size: "xl"
};

export const color = Template.bind({});
color.args = {
  color: "red"
};




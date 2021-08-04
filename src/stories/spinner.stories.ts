// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpinnerComponent } from 'src/app/story-components/spinner/spinner.component';

export default {
  title: 'Spinner Component',
  component: SpinnerComponent
} as Meta;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
    component: SpinnerComponent,
    props: args,
});

export const borderColor = Template.bind({});
borderColor.args = {
  borderColor: 'red',
};

// export const WithImageCaption = Template.bind({});
// WithImageCaption.args = {
//   figCaptionTxt: 'Testing Image caption....',
// };

// export const WithZeroOpacity = Template.bind({});
// WithZeroOpacity.args = {
//   imgOpacity: 1
// };

// export const WithHalfOpacity = Template.bind({});
// WithHalfOpacity.args = {
//   imgOpacity: 0.5
// };
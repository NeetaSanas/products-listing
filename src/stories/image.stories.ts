// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImageComponent } from 'src/app/story-components/image/image.component';

export default {
  title: 'Image Component',
  component: ImageComponent
} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent) => ({
    component: ImageComponent,
    props: args,
});

export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
  figCaptionTxt: '',
};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
  figCaptionTxt: 'Testing Image caption....',
};

export const WithZeroOpacity = Template.bind({});
WithZeroOpacity.args = {
  imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
  imgOpacity: 0.5
};
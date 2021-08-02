import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { PostListComponent } from 'src/app/posts/post-list/post-list.component';


// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/posts',
  // The component related to the Stories
  component: PostListComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [PostListComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<PostListComponent> = () => ({
  component: PostListComponent,
  template: `<app-post-list></app-post-list>`,
});
export const Posts = Template.bind({});

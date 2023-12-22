import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/ui';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum non animi totam dolores repellendus rem expedita aperiam cum, similique incidunt! Et, voluptas earum! Eaque ex voluptatibus architecto culpa, obcaecati quia!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum non animi totam dolores repellendus rem expedita aperiam cum, similique incidunt! Et, voluptas earum! Eaque ex voluptatibus architecto culpa, obcaecati quia!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

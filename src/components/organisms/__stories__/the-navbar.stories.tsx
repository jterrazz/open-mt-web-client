import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TheNavbar from '../the-navbar';

export default {
    component: TheNavbar,
    title: 'Organisms/TheNavbar',
} as ComponentMeta<typeof TheNavbar>;

const Template: ComponentStory<typeof TheNavbar> = (args) => (
    <TheNavbar {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    mainLinks: [
        { name: 'Link 1', url: 'url' },
        { name: 'Link 2', url: 'url' },
    ],
    title: 'The Title',
    user: {
        avatarUrl: 'avatar url',
        name: 'The User Name',
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    mainLinks: [
        { name: 'Link 1', url: 'url' },
        { name: 'Link 2', url: 'url' },
    ],
    title: 'The Title',
};

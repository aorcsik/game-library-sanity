import { defineField } from 'sanity';

export const platformField = defineField({
  name: 'platform',
  type: 'string',
  options: {
    list: [
      {title: 'Steam', value: 'steam'},
      {title: 'Epic Games', value: 'epic'},
      {title: 'Good Old Games', value: 'gog'},
      {title: 'Prime Gaming', value: 'amazon'},
      {title: 'PlayStation', value: 'playstation'},
      {title: 'Apple App Store', value: 'appstore'},
      {title: 'Nintendo Switch', value: 'switch'},
      {title: 'Xbox', value: 'xbox'},
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
});
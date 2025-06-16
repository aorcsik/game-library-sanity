import {defineField, defineType} from 'sanity';
import {platformField} from '../schemaFields/platformField';

export const notesType = defineType({
  name: 'notes',
  title: 'Game Notes',
  type: 'document',
  fields: [
    platformField,
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'completed',
      type: 'boolean',
    }),
    defineField({
      name: 'progress',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      options: {
        list: [
          {title: 'watched', value: -10},
          {title: 'disliked', value: -1},
          {title: 'neutral', value: 0},
          {title: 'liked', value: 1},
          {title: 'loved', value: 2},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'watched',
      type: 'boolean',
    }),
    defineField({
      name: 'notes',
      type: 'string',
    }),
    defineField({
      name: 'soundtrack',
      type: 'string',
    }),
    defineField({
      name: 'notesJSON',
      type: 'string',
    })
  ],
});
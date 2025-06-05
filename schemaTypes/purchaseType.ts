import {defineField, defineType} from 'sanity'
import {platformField} from '../schemaFields/platformField';

export const purchaseType = defineType({
  name: 'purchase',
  title: 'Purchase',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      type: 'string',
    }),
    platformField,
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      type: 'string',
    }),
    defineField({
      name: 'collection',
      type: 'string',
    }),
    defineField({
      name: 'physical',
      type: 'boolean',
    }),
    defineField({
      name: 'logo',
      type: 'string',
    }),
    defineField({
      name: 'appId',
      type: 'number',
    }),
    defineField({
      name: 'netflix',
      type: 'boolean',
    }),
    defineField({
      name: 'plus',
      type: 'boolean',
    }),
    defineField({
      name: 'generation',
      type: 'array',
      of: [
        {type: 'string'},
      ],
      options: {
        list: [
          {title: 'PS4', value: 'PS4'},
          {title: 'PS5', value: 'PS5'},
        ]
      }
    }),
  ],
});

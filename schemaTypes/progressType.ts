import {defineField, defineType} from 'sanity';
import {platformField} from '../schemaFields/platformField';

export const progressType = defineType({
  name: 'progress',
  title: 'Progress',
  type: 'document',
  fields: [
    platformField,
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      type: 'number',
    }),
  ],
});

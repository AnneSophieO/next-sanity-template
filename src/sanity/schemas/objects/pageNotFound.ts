import { groq } from 'next-sanity'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pageNotFound',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'body', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
  ],
})

export const pageNotFoundQuery = groq`
  title,
  body,
`

export type TPageNotFound = {
  title?: string
  body?: string
}
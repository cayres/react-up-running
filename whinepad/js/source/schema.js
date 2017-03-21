import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Name',
    show: true,
    sample: '$2 chuck',
    align: 'left',
  },
  {
    id: 'year',
    label: 'Year',
    type: 'year',
    show: true,
    sample: 2015,
  },
  {
    id: 'grape',
    label: 'Grape',
    type: 'Suggest',
    options: classification.grapes, 
    show: true,
    sample: 'Merlot',
    align: 'left',
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'Rating',
    show: true,
    sample: 3,
  },
  {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    sample: 'Nice for the price',
  },
]


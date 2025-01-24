import { Dashboard } from 'checkly/constructs'

new Dashboard('dog-dashboard', {
  header: 'Dog API',
  description: 'Status of Dog.ceo API',
  tags: ['dog'],
  logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Dog.svg',
  customUrl: `lauras-dog-dashboard`,
  enableIncidents: true,
})
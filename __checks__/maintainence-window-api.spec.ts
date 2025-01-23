import 'dotenv/config'
import { test, expect } from '@playwright/test'

const baseUrl = 'https://api.checklyhq.com/v1/maintenance-windows'
const headers = {
  'X-Checkly-Account': process.env.CHECKLY_ACCOUNT_ID!,
  Authorization: `Bearer ${process.env.CHECKLY_API_KEY!}`,
}

test('create, retrieve, and delete a maintainence window', async ({ request }) => {
  const maintWindow = await test.step('create', async () => {
    const response  = await request.post(`${baseUrl}`, {
      data: {
        name: 'My Test Maintainence Window',
        startsAt: '2030-12-01',
        endsAt: '2030-12-02',
        repeatUnit: 'MONTH',
      },
      headers
    })

    expect(response).toBeOK()

    return response.json()
  })

  await test.step('retrieve', async () => {
    const response = await request.get(`${baseUrl}/${maintWindow.id}`, {
      headers
    })
  
    expect(response).toBeOK()

    const retrievedMaintWindow = await response.json()
    expect(retrievedMaintWindow.id).toEqual(maintWindow.id)
  })

  await test.step('delete', async () => {
    const response = await request.delete(`${baseUrl}/${maintWindow.id}`, {
      headers
    })

    expect(response).toBeOK()
  })

  await test.step('check if deleted', async () => {
    const response = await request.get(`${baseUrl}/${maintWindow.id}`, {
      headers
    })
  
    expect(response.status()).toBe(404)
  })
})
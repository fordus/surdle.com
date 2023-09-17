import { test, expect } from '@playwright/test'

test('Get the correct title', async ({ page }) => {
  await page.goto('https://surdle.com/')
  await expect(page).toHaveTitle(/Tristan Vidal/)
})

test('Check correct heading', async ({ page }) => {
  await page.goto('https://surdle.com/')
  expect(await page.innerText('h1')).toBe('Tristan Vidal')
}
)

test('Check projects and about are present', async ({ page }) => {
  await page.goto('https://surdle.com/')
  expect(await page.innerText('a:has-text("Projects")')).toBe('Projects')
  expect(await page.innerText('a:has-text("About")')).toBe('About')
}
)

test('Check footer is present', async ({ page }) => {
  await page.goto('https://surdle.com/')
  await page.getByText('Twitter LinkedIn GitHub')
  expect(await page.innerText('a:has-text("Twitter")')).toBe('Twitter')
}
)

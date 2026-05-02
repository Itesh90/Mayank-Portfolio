import { test, expect } from '@playwright/test'

test('home page loads with header and hero', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('banner')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('main navigation is present', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible()
})

test('CTA section exposes the contact email', async ({ page }) => {
  await page.goto('/')
  const emailLink = page.getByRole('link', { name: /hello@elaravoss\.com/i })
  await emailLink.scrollIntoViewIfNeeded()
  await expect(emailLink).toBeVisible()
  await expect(emailLink).toHaveAttribute('href', 'mailto:hello@elaravoss.com')
})

test('footer is present', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('contentinfo')).toBeVisible()
})

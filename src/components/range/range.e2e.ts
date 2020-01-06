import { newE2EPage } from '@stencil/core/testing';

describe('gran-range', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gran-range></gran-range>');

    const element = await page.find('gran-range');
    expect(element).toHaveClass('hydrated');
  });
});

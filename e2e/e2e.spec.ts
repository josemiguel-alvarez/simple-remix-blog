import { test, expect } from "@playwright/test";

test("users can navigate to post page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle("simple-remix-blog");

  const postTitle = "Acheronta altoque";
  await expect(page.getByText(postTitle)).toBeVisible();
  await page.getByText("Read more").nth(0).click();

  await expect(page).toHaveURL("http://localhost:3000/posts/example-post-2");

  await expect(page.getByAltText("Author's avatar")).toBeVisible();
  await expect(page.getByText("August 30, 2022")).toBeVisible();
  await expect(page.getByText("Sine aequum praeferret mihi")).toBeVisible();
  await expect(
    page.getByText(
      "Lorem markdownum figuris arcum, vestes, traharis reperire quia."
    )
  ).toBeVisible();

  await expect(
    page.getByText(
      "Magno adspexit Phorbas velles in qua terras, nec cuique plus tenet."
    )
  ).toBeVisible();

  await page.getByRole("link", { name: "Blog" }).click();
  await expect(page).toHaveURL("http://localhost:3000/blog");
  await expect(page.getByText("All posts")).toBeVisible();
});

test("users can see the list of all posts", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle("simple-remix-blog");

  await page.getByRole("link", { name: "Blog" }).click();
  await expect(page).toHaveURL("http://localhost:3000/blog");
  await expect(page.getByText("All posts")).toBeVisible();
  expect(await page.getByText("Read more").count()).toBe(4);
});

<center>
<h1>
  <img alt="Project logo" src="https://user-images.githubusercontent.com/89982193/189909779-fc246b9e-1ff8-46d8-9c57-8c51d1676d77.png">
</h1>
</center>

![GitHub release (latest by date)](https://img.shields.io/github/v/release/josemiguel-alvarez/simple-remix-blog)
[![GitHub license](https://img.shields.io/github/license/josemiguel-alvarez/simple-remix-blog)](https://github.com/josemiguel-alvarez/simple-remix-blog/blob/main/LICENSE)

simple-remix-blog is a blog template built using [remix.run](https://remix.run/) and [TailwindCSS](https://tailwindcss.com/). It supports markdown and MDX for the blog posts. You can clone it and start your own blog in a few minutes. Check out the documentation below to get started.

If you face any issues or have any suggestions, please open an issue!

## Demo

[simple-remix-blog.vercel.app](https://simple-remix-blog.vercel.app/)

<details>
  <summary>Screenshots</summary>
  <h1>
    <img alt="Home" src="https://user-images.githubusercontent.com/89982193/190130973-0291b5bc-99f5-4bb0-be07-2485e3d4913e.png">
  </h1>

  <h1>
    <img alt="Post" src="https://user-images.githubusercontent.com/89982193/190131250-831b88d4-9b29-4b3c-a537-f64e277621cd.png">
  </h1>

  <h1>
    <img alt="Tags" src="https://user-images.githubusercontent.com/89982193/190131315-f54a9ea2-46f3-4235-abca-a61571272cf8.png">
  </h1>

  <h1>
    <img alt="About" src="https://user-images.githubusercontent.com/89982193/190131432-189d5394-aa2b-4dff-922a-184f8f879ac9.png">
  </h1>

</details>

## Quick start

Run the following command to create a project using this blog template:

```bash
npx create-remix@latest --template josemiguel-alvarez/simple-remix-blog
```

Once you've created the project you have to install the dependencies:

```bash
yarn install
```

and run the `dev` script:

```bash
yarn dev
```

Your blog should now be running on localhost:3000. There are some example posts in the template that you can remove when you're ready to start adding your own posts.

Then you have to update the `app/siteMetadata.js` file with your own information.

To create a new post you have to add a new markdown or MDX file in `app/routes/posts`. The project supports frontmatter, so you can add the post metadata formatted as YAML at the top of the file. Check the posts in this repository if you need an example.

Finally, include the new post in the `POSTS` constant in the `app/utils/posts.server.ts` file. The post should be available now in your blog.

## Motivation

I built this blog template because I wanted to port my own personal site to Remix. I also wanted to contribute back to the community so I decided to build it as a Remix template.

## Features

- Supports markdown and MDX
- Easily customizable using TailwindCSS
- Near perfect [page performance](https://pagespeed.web.dev/report?url=https%3A%2F%2Fsimple-remix-blog.vercel.app%2F)
- Light and dark theme
- Responsive design
- Syntax highlighting for code blocks
- Support for tags
- SEO friendly
- About page
- Cache headers already pre-configured

## Contributing

Feel free to open an issue if you have any suggestions or issues. I'll try to respond as soon as possible. You can also open a PR if you want to contribute to the project.

This project has the All Contributors bot installed, so please open a pull request to add yourself to the contributors list. Check the [All Contributors documentation](https://allcontributors.org/docs/en/bot/usage).

Contributing guide:

1. Fork & clone this project.
2. Run `yarn install` to install all the dependencies.
3. Run `yarn dev` to start the development server.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.linkedin.com/in/jmalvarezvano"><img src="https://avatars.githubusercontent.com/u/89982193?v=4?s=100" width="100px;" alt=""/><br /><sub><b>José Miguel Álvarez Vañó</b></sub></a><br /><a href="https://github.com/josemiguel-alvarez/simple-remix-blog/commits?author=josemiguel-alvarez" title="Code">💻</a> <a href="https://github.com/josemiguel-alvarez/simple-remix-blog/commits?author=josemiguel-alvarez" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

simple-remix-blog is released under [MIT License](https://github.com/josemiguel-alvarez/simple-remix-blog/blob/main/LICENSE).

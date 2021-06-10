# mariosanchez.org

This is my personal site, made with [Hugo](https://gohugo.io). Hugo is a blazing fast static site generator made with Go. My goal was to use the simplest possible site structure and the least amount of templates.  

I started by downloading Hugo and running the `hugo new site mysite` command to create the basic scaffolding for the site. This command creates a folder in your computer called `mysite` and populates it with several folders, the most important of which are:

* `content` (self explanatory)
* `layouts` which holds your different page templates, and 
* `static` which contains static assets such as images, style sheets and JavaScript files.

Under the `content` folder, I created three subfolders for the three types of content I wanted to display on my site:

* `post`: Things I write
* `project`: A portfolio of my coding projects
* `notes`: Notes and highlights from books I read

All content files are written in Markdown.

For templates, I just created three `_default` ones:

1. `single.html` to display single pages (same template for blog posts, projects and notes)
2. `list.html` to display a collection of posts, projects or notes. I chose to just display titles and dates.
3. `li.html` to display the title and date of each individual post, project or note.

I also created an `index.html` file in the `layouts` folder, which contains the home page of my site.

Finally, I created two `partials` templates: `header.html` and `footer.html` that are called from the other templates. These two templates contain information that is common to all pages of the site.

That's basically it. To create the static site to be deployed, I just run the `hugo` command and the static files are placed in a `public` folder that I then deploy to Github Pages using Git.

# Datadog Assessment

The task was to create a site using [Hugo](https://gohugo.io/) with Bootstrap 4, SCSS and some Javascript to match the mock site that was provided.

The site is hosted via S3 and Cloudfront per request, and can be accessed [here]()

## Summary

I had never worked with Hugo or Bootstrap prior to this past week, and I found it interesting and there was a lot of built in functionality out of the box once you got used to the syntax required to work within their templating.
Overall the experience was positive, I did make some trade offs since I had never used it. While the docs were incredibly helpful, I would need a little more working time to be able to leverage a lot of the built in things Hugo offers. I did do my best to try to stay in the realm of what it is used for.

As for bootstrap, I had worked with tailwinds quite a bit previously, so I'm used to working with utility classes. I tried my best to use those where it made sense, but did find their grid setup a bit rough. I ended up having to refactor the lgoos of partner companies into my own custom rolled grid since I was having trouble achieving that through Bootstraps Grid system.

## Tradeoffs

Due to this being a take home assessment that I had to complete, along side work and other things I did make some trade offs to get what was required completed in a timely fashion.

I did end up writing more html then was probably needed, but due to not being familiar with Hugo fully, I chose to use the built ins I could while writing out some css where I probably could have used menus or other hugo builtins.

The same also happeend with Bootstrap, I am sure I wrote more scss than I needed to becuase I just happened to miss some resources Bootstrap had under the hood. This is something I would dig into deeper to avoid if this was a full project.

I also limited the amount of functionality with Javascript on this since majority of the page is static, I did however make use of it for the mobile navigation, as well as determining the users screen size and which navigation to display on load. This is something I would 100% refactor in the futue since I did notice a few things I'd love to optomize.

## Things I would refactor if this was ongoing

- The mobile navigation being able to exit on esc as well as outside click
- The price table, I probably missed something bootstrap had built in to make this look a little better on mobile. If not I would go back and custom roll some CSS for a better UX.
- More functionality on the page, the image carousel for example. It is static right now, but Bootstrap and JS would allow me to leverage this a little more.
- Overall getting it more pixel perfect

## Resources I used

The majority of what I used was actually the docs for both Bootstrap and Hugo. I did watch some youtube videos on Hugo setup with Bootstrap in particular [link](https://www.youtube.com/watch?v=Vj5zy2q7O9U&t=1502s&ab_channel=FutureWebDesign).

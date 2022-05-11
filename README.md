# Portfolio Website

## Description 

* My portfolio website is a web app that gives some brief information about me as a software developer.  There are links to my GitHub and LinkedIn pages, my mission statement as a software developer, and a blurb about my programming education.  All of my personal projects are on display decorated with links to the source code as well as being equipped with demo videos; and finally there is a contact page, in which people can communicate with me through a form.
* Next.js had been catching my eye at this point in time, so I decided that I may use it in the making of this project.  I had been reading about its server-side rendering,out-of-the-box routing, and search engine optimization capabilities, which appeared to be extremely pertinent to this type of web app.  And thus, in the context of being a portfolio website that potential employers would browse and rank my ability as a software developer, I concluded that all of these features were extremely vital to incorporate for the following reasons:
  * I wanted something that would run as efficiently as possible, and thus SSR was a no-brainer requisite to be included.
  * A built-in routing feature also seemed really nice to implement in that routing could be quick and easy to setup for swift deployment to the public internet.
  * Search engine optimization is rightfully so all the rage these days in that one's website has an immensely higher chance of being displayed as a top result when a user performs a web search.
* So with Next.js being the JavaScript framework upon which this project was built, I needed a CSS library/framework to utilize for styling purposes.  To fulfill this need, I chose to use Emotion/Styled Components based on all the wonderful things the developer community had to say about CSS-in-JS libraries.  It was extremely easy to use in that the CSS can be housed directly within the files that also perform the logic.
* In an effort to serve up various types of content in the form of an API, Strapi, a Node.js Headless CMS, was applied to the project.  With this tool, I was able to create a data structure within just a few minutes and subsequently consume it in the form of an API within my frontend.  
* Features that I will likely implement into this project include:
  * Further updates to my Projects page
  * Add more styling/animation/interactivity

## Installation and Usage

  1. To begin using this project, you must first have Node.js installed on your local machine.
  2. Then proceed to clone the repo into a local directory using: ```git clone https://github.com/nicholasjperry/next-portfolio.git```.
  3. Once you have cloned the remote repository to your local directory, install the required dependencies via: ```npm install```.
  4. Create another directory outside of the current one in order to install the remote repository that will house the backend API.  Once you have performed this action, clone this remote repository using: ```git clone https://github.com/nicholasjperry/strapi-portfolio.git```.
  5. In order to get both the frontend and backend to communicate on your local machine at ```https://localhost:3000```, you will need to run ```npm dev``` in your Next.js project directory and ```npm develop``` in your Strapi project directory.  Then navigate to ```https://localhost:3000``` to view the project.  Of note, the backend API can be visited at ```https://localhost:1337```.  

## License  

MIT License

Copyright (c) [2022] [Nicholas Perry]

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  
  
The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.  
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.  
import { IArticle } from './article.interface';

// Seed data that is used as a mock data store for articles
export const ARTICLES_SEED_DATA: Array<IArticle> = [
  {
    id: '1e5cd08d-479e-4a3a-bdd3-4bdddbcaadc3',
    createdAt: '2023/06/12',
    authorId: 'f47304c4-5e83-4982-bac6-c6fb3e87800e',
    tags: ['Service Worker', 'JavaScript'],
    title: 'Flawless and Silent Upgrade of the Service Worker',
    description:
      'If you worked on service worker, you know the challenge of upgrading servicer worker with new release in an efficient way.<br/><br/>This article helps to accomplish a flawless service worker update, where it solves following problems:<br/><ul><li>Need of all tabs to be closed, because old service worker is still in use by other tabs/windows</li><li>Need of window.location.reload to get new service worker</li><li>Need of User Interaction to update</li><li>If the Service worker updates not fast enough, old HTML or old resources may still be present even after reload, so we would need again to force a reload</li></ul>',
    urls: [
      'https://dev.to/atonchev/flawless-and-silent-upgrade-of-the-service-worker-2o95',
    ],
  },
  {
    id: '23779ac2-b3d6-4c79-ac59-ad83c8cc2d67',
    createdAt: '2023/06/15',
    authorId: '2dfc62d5-05e3-4f72-a23b-2d503fe0c0c3',
    tags: ['Clean Code'],
    title: 'Writing Clean Code',
    description:
      'Being an architect I spent a good amount of time doing code reviews. While doing review I felt that a lot of developer need to know how to write clean and readable code. Writing readable code is very essential for a team productivity and project success. If anyone want to learn it, Clean Code book by Robert C Martin is the best resource. If someone doesn\'t like reading book can take advantage of this course: "Writing Clean Code" by "Maximilian Schwarzmüller". I would recommend this for everyone and all leads here in this group should think whether they want to give this course to their team member as a learning objective. All who have read this book or have done this course, pls comment so that other can understand about book/course quality.',
    urls: ['https://www.udemy.com/course/writing-clean-code/'],
  },
  {
    id: '2a3b3b1a-5b0a-4b0e-8b0a-5b0a4b0e8b0a',
    createdAt: '2023/06/15',
    authorId: '22e7b78a-e662-4e0f-abe1-031e75f53627',
    tags: ['Clean Code'],
    title: 'Programming Feedback for Advanced Beginners',
    description:
      'There is a blog series by Robert Heaton on clean code. In this, he reviewed the code sent by his readers and published the feedback with a great explanation. The series is called Programming Feedback for Advanced Beginners.',
    urls: ['https://robertheaton.com/2019/11/11/pfab1/'],
  },
  {
    id: '3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
    createdAt: '2023/06/19',
    authorId: 'e56dbb77-a8ed-42d3-90ed-925fd71bce62',
    tags: ['JavaScript', 'Patterns', 'Design Patterns'],
    title: 'JavaScript Design Patterns',
    description:
      'patterns.dev is one of my fav learning resources... <br/>Its the best place to start with the latest web patterns... like SSR, Islands, Progressive Hydration... etc.. <br/>For deep dive on these topics we can look into the streams of Ryan Corniato (Creator of Solid.js). They are loong but they give great insight into how these modern js frameworks work.',
    urls: ['https://www.patterns.dev/'],
  },
  {
    id: '4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e',
    createdAt: '2023/06/19',
    authorId: 'e56dbb77-a8ed-42d3-90ed-925fd71bce62',
    tags: ['JavaScript', 'React', 'Context API', 'Composition'],
    title: 'Un-Suck Your React Components - Composable & Compound Components',
    description:
      'When it comes to clean code... I really love this one... Composition using context API... Short Video... but very informative.',
    urls: ['https://www.youtube.com/watch?v=vPRdY87_SH0'],
  },
  {
    id: '5f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c',
    createdAt: '2023/06/21',
    authorId: 'f47304c4-5e83-4982-bac6-c6fb3e87800e',
    tags: ['JavaScript', 'React', 'React Query'],
    title: 'What is React Query?',
    description:
      "Imagine you have a toy box with different toys inside. Sometimes you want to play with a specific toy, but you can't find it right away because it's mixed up with all the other toys. React Query helps you find the toy you want quickly and easily.<br/><br/>React Query is like a special helper that keeps track of all the toys and helps you get them when you need them. It remembers where each toy is and makes sure you can get it easily without searching all over your toy box.<br/><br/>But React Query does more than just finding toys. It also helps you keep the toys up to date. Let's say you have a toy car and you want to know if it's still working or if someone else is playing with it. React Query can check with the toy car and let you know if it's available or not.<br/><br/>Just like your helper finds the toy you want, React Query helps your app get the information from the server really fast. It makes sure that your app always has the most up-to-date information, like the newest toy in the box.<br/><br/>So, React Query is like a special helper that makes it easier and faster for web app to talk to a server and get the information it needs, just like how your helper finds the toy you want in the toy box.<br/><br/>We have used React Query in our project, and our experience was great. Have you used React query or a related library in your project? If yes, please share your insights with us to understand it better?<br/><br/>",
    urls: ['https://decode.agency/article/what-is-react-query'],
  },
  {
    id: '6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a',
    createdAt: '2023/06/21',
    authorId: 'e56dbb77-a8ed-42d3-90ed-925fd71bce62',
    tags: ['JavaScript', 'React', 'React Query'],
    title: 'Practical React Query',
    description:
      "I don't know how much I need to thank to RQ for making my life easier after dealing with loot of boiler plate that comes with reducers and Sagas(they are powerful... perhaps too powerful).<br/><br/> https://tkdodo.eu/blog/practical-react-query is one of the best blog for practical react query. I would say that it was my step to step guide during my implementation of RQ in our project.",
    urls: ['https://tkdodo.eu/blog/practical-react-query'],
  },
  {
    id: '7b8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e',
    createdAt: '2023/06/29',
    authorId: '53f96559-cf9a-422a-b3fe-9b86ff93822e',
    tags: ['JavaScript', 'Rush', 'Monorepo', 'Repository Management', 'Rushjs'],
    title: 'Rush - Monorepo Management',
    description:
      "At some point, we've all encountered a common JavaScript issue where we need to share code or modules among different repositories. There are a few approaches we can take:<br/><ol><li>If we can make the code public, we can push it to the npm public registry.</li><li>For private code sharing, we can utilize a private npm registry, where we publish and use common code across our repositories.</li><li>In cases where we don't have a private npm registry and prefer not to expose our code publicly, we can employ git submodules to share code between repositories.</li></ol>However, regardless of the chosen approach, managing multiple repositories becomes challenging, particularly when code is shared among them. Considerations such as versioning, publishing, and updating the code in different repositories become crucial.<br/><br/>So, how do major organizations like Google and Microsoft tackle this issue? They adopt a monorepo architecture. A monorepo is a single repository that houses multiple projects, making it incredibly convenient to share code among them. Updating the code in one project automatically reflects changes in all other projects that use it. Concerns like versioning and publishing are alleviated as everything resides within a single repository.<br/><br/>It's important not to confuse a monorepo with deployable monoliths. They are not directly related. A monorepo is simply a means of managing multiple projects within one repository. Deployment of projects within a monorepo doesn't imply they must be deployed together.<br/><br/>We rely on RushJS to manage our monorepo. Rush is a powerful open-source toolchain from Microsoft specifically designed for monorepo management. It effectively resolves common JavaScript issues such as Phantom dependencies and NPM doppelgangers. With over 35 projects in our monorepo, Rush streamlines the management of all our projects.<br/><br/>Give it a try and share your thoughts with us.",
    urls: ['https://rushjs.io/'],
  },
  {
    id: '8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c',
    createdAt: '2023/07/07',
    authorId: '3ca497e2-1439-4eba-8919-1c516efc8bca',
    tags: ['JavaScript', 'ECMA', 'ECMAScript', 'ES2022'],
    title: 'New JavaScript Features in ES2022 That You Should Know',
    description:
      "The ECMAScript specification is developed through a process that involves proposing new features, gathering feedback, and implementing and testing those features.<br/>Here are some new features of ES2022. I know this came last year but still, I don't use these, just hoping to let you all learn and encouraging you all to use it.",
    urls: ['https://www.turing.com/kb/latest-javascript-features-in-es2022'],
  },
  {
    id: '9d0e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4a',
    createdAt: '2023/07/14',
    authorId: '2dfc62d5-05e3-4f72-a23b-2d503fe0c0c3',
    tags: ['Clean Architecture', 'Clean Code', 'Architecture'],
    title: 'Clean Architecture',
    description:
      'This is for I3 and above, if you want to improve your architecture skill like how should we manage a large code base, layer architecture or port and adapter, how to manage dependencies in project and keep it loosely coupled, how should we write and manages test cases etc. Then read "Clean Architecture", one of my favorite technical book. As per me all I3 and above must read this book at-least once in lifetime.',
    urls: [
      'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164',
      'https://github.com/ivanarandac/Books/blob/master/Clean%20Architecture%20A%20Craftsman%20Guide%20to%20Software%20Structure%20and%20Design.pdf',
    ],
  },
  {
    id: '0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e',
    createdAt: '2023/07/20',
    authorId: '0e10f901-7da7-45c4-9054-14ddd09214ba',
    tags: ['Nodejs', 'Best Practices'],
    title: 'Nodejs Best Practices',
    description:
      "As a developer we always struggle to find out or define the best practices to follow when we are starting a new project or best practices are not defined. In this repository (goldbergyoni/nodebestpractices) many developers have compiled an extensive collection of best practices for Node.js development. This comprehensive guide covers a wide range of topics, including code organization, error handling, security, performance optimization, testing, logging, and more. Whether you are a beginner or an experienced Node.js developer, you will find valuable insights to level up your skills and produce high-quality code.<br/><br/>Key Highlights<ul><li>A well-structured collection of best practices and examples</li><li>In-depth explanations and reasoning behind each practice</li><li>Emphasis on performance, scalability, and security</li><li>Regularly updated to reflect the latest trends and developments in the Node.js ecosystem</li></ul>Feel free to explore the repository. Hope you'll find it out helpful.",
    urls: ['https://github.com/goldbergyoni/nodebestpractices'],
  },
  {
    id: '2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c',
    createdAt: '2023/07/28',
    authorId: 'f47304c4-5e83-4982-bac6-c6fb3e87800e',
    tags: ['JavaScript', 'Service Worker', 'PWA', 'Progressive Web App'],
    title: 'Service Workers: A fundamental part of a PWA',
    description:
      "A service worker is a JavaScript file that acts as a powerful intermediary between a web application and the network. It runs in the background, separate from the web page, and enables various advanced features for web applications, especially in the context of Progressive Web Apps (PWAs). Here's a summary of what a service worker does:<br/><ol><li><strong><u>Offline Support</u></strong> One of the main purposes of a service worker is to provide offline support for web applications. It can intercept network requests and cache resources like HTML, CSS, JavaScript, images, and other assets. This allows the web app to continue functioning even when the user's device is offline, displaying cached content instead.</li><li><strong><u>Faster Loading</u></strong> By caching resources, a service worker can make subsequent visits to a website faster because it can serve the cached content directly from the local device rather than making a network request to the server.</li><li><strong><u>Push Notifications</u></strong> Service workers enable the delivery of push notifications to users even when the web app is not open. This feature allows websites to send timely updates and alerts to users, even if they are not actively browsing the site.</li><li><strong><u>Background Sync</u></strong> Service workers can schedule background sync tasks, which allow the web app to synchronize data with the server when the user's device has an internet connection again.</li><li><strong><u>Improved Performance</u></strong> By handling resource caching and network requests, service workers reduce server load and can lead to improved performance and responsiveness of web applications.</li><li><strong><u>Secure Origins Only</u></strong> To prevent malicious use, service workers can only be registered on websites served over HTTPS, ensuring that the communication between the service worker and the website is encrypted and secure.</li><li><strong><u>Updates and Lifecycle Management</u></strong> Service workers have a lifecycle that allows them to be updated and replaced easily, ensuring that the web app always uses the latest version.</li></ol>Overall, service workers play a crucial role in making web applications more reliable, faster, and engaging. They are a core technology behind the concept of Progressive Web Apps, which aim to provide a more app-like experience on the web platform.<br/><br/>Hope you'll find it out helpful.",
    urls: [
      'https://web.dev/learn/pwa/service-workers/',
      'https://www.youtube.com/watch?v=NJRu3pmmN-4&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj',
    ],
  },
  {
    id: '4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a',
    createdAt: '2023/07/31',
    authorId: '53f96559-cf9a-422a-b3fe-9b86ff93822e',
    tags: ['Technical Debt', 'Technical Debt Quadrant'],
    title: 'The Technical Debt Metaphor',
    description:
      '"Metaphors are a way of thinking and a way of seeing" - Gareth Morgan, 1986<br/><br/>The term “Technical Debt” was coined by Ward Cunningham, the “debt” metaphor frames how to think about and deal with this issue.<br/><br/>Much like financial debt, technical debt involves making conscious trade-offs to achieve short-term gains, with an awareness that these decisions will incur interest and require future repayment. Just as we might borrow money to accomplish something quickly, knowing that we must pay interest until we repay the principal, we incur technical debt to expedite the release of a product. This incurs a figurative “interest” in terms of reduced development speed, decreased efficiency and increased complexity. The principal amount of technical debt can only be repaid through strategic refactoring and improvement.<br/><br/>Ward Cunningham\'s original idea behind "Technical Debt" was to describe a “deliberate” decision made to release a feature early, understanding that there would be a cost in terms of future maintenance.  This term has taken a broader meaning now, “Technical Debt” is now used to describe anything that slows us down and makes future maintenance harder, even in cases where we didn’t realize that we were in fact incurring technical debt.<br/><br/>Martin Fowler\'s Technical Debt Quadrant helps us categorize and understand the different types of technical debt we may encounter -<ol><li><strong><u>Deliberate and Prudent</u></strong>: This type of technical debt is taken on intentionally to expedite product delivery. It involves thoughtful consideration of the trade-offs and a clear plan for future repayment through refactoring.</li><li><strong><u>Deliberate and Reckless</u></strong>: In this case, technical debt arises from carelessness or neglecting essential aspects like design and refactoring. While it may offer short-term benefits, it can lead to severe long-term consequences.</li><li><strong><u>Inadvertent and Reckless</u></strong>: When we lack a complete understanding of the application\'s architecture or crucial aspects, we may unknowingly incur this type of technical debt. It results from unintentional mistakes that hinder progress and demand resolution.</li><li><strong><u>Inadvertent and Prudent</u></strong>: Starting with less than ideal design due to limited knowledge of future development or resources leads to this type of technical debt. While it is not intentional, it still requires future investment for improvement.</li></ol>',
    urls: [
      'https://wiki.c2.com/?MetaphorsWeLiveBy',
      'https://wiki.c2.com/?WardExplainsDebtMetaphor',
      'https://martinfowler.com/bliki/TechnicalDebtQuadrant.html',
      'https://wiki.c2.com/?ComplexityAsDebt',
    ],
  },
  {
    id: 'e2a49111-e4e5-4030-8025-7d62839f8853',
    createdAt: '2023/08/01',
    authorId: '53f96559-cf9a-422a-b3fe-9b86ff93822e',
    tags: ['Technical Debt', 'Facade Pattern', 'Microservices Architecture'],
    title: 'Understanding Different Types of Technical Debt',
    description:
      "Let's explore the various types of technical debt and how we can address them to build better software.<br/><br/><h3>1. Code Debt</h3>Developers spend more time reading than writing the code, Code debt occurs when the codebase becomes difficult to read and understand. This happens when developers use complex logic, create long and convoluted methods and classes, or give variables and methods unclear names. To avoid code debt, we should follow these principles:<ul><li>Write clean code with meaningful names, shorter methods and classes that are easy to comprehend.</li><li>Avoid duplicating code by using common functions instead of copy-pasting similar logic in different classes.</li><li>Practice loose coupling and follow SOLID principles to enhance code maintainability.</li></ul><h3>2. Architectural Debt</h3>The initial design of an application will not be perfect for all use cases we might cover in future as we cannot anticipate all the features we might work on, so design flexibility is really important to consider throughout the development. To avoid architectural debt, consider these principles:<ul><li>Embrace the open-closed principle, which allows you to extend functionality without modifying existing code.</li><li>Employ application layering and plugin architecture to enhance modularity and adaptability.</li><li>Do not overlook security and performance concerns because the longer you leave them hanging the more they will hurt later on.</li></ul><h3>3. Test Debt</h3>It's really important to have automated test suites to keep the application deployments quick and confident. The time that we “save” by not writing test cases is usually lost very quickly with manual testing and bug fixing. To avoid test debt, adhere to these principles:<ul><li>Strive for 100% automated test coverage of the application's business logic.</li><li>Test in real-world environments, considering various browsers, operating systems, etc.</li><li>Consider adopting Test Driven Development (TDD) to maintain code that is testable and bug-free.</li></ul><h3>4. Knowledge Debt</h3>With an ever-changing team structure, it's inevitable that the current team members don't understand all parts of the application code, this can slow down the development process as the knowledge must be rediscovered. Maintaining up-to-date documentation and code comments can be challenging, but we can take steps to mitigate knowledge debt:<ul><li>Keep code clean and well-structured to make it more understandable for newcomers.</li><li>Encourage regular knowledge-sharing sessions among team members to spread domain knowledge.</li></ul><h3>5. Technological Debt</h3>The technological debt stems from using outdated technologies that become less effective over time. To address technological debt, follow these steps:<ul><li>Strategically update parts of the application using newer technologies, like microservices architecture and facade patterns.</li><li>Gradually migrate the entire application to a more flexible and future-proof architecture.</li></ul>",
    urls: [
      'https://refactoring.guru/design-patterns/facade',
      'https://martinfowler.com/articles/microservices.html',
    ],
  },
  {
    id: 'f6a7b8c9-d0e1-f2a3-b4c5-d6e7f8a9b0c1',
    createdAt: '2023/08/11',
    authorId: '2dfc62d5-05e3-4f72-a23b-2d503fe0c0c3',
    tags: ['Event Driven Architecture', 'Nodejs'],
    title: 'Introduction to Event-Driven Architecture in Node.js Typescript',
    description:
      "Node is very famous for its event driven architecture. In Talentica most of us write code in layer architecture and most of the code will be present in service file. Event driven can help us here to split the code as per domain driven design and let one domain entity handle it's status changes and raise event for it's status and other entities which want to listen to this event can perform some tasks as they want.",
    urls: [
      'https://medium.com/scb-abacus/introduction-to-event-driven-architecture-in-node-js-typescript-354302bc055c',
    ],
  },
  {
    id: 'd2e3f4a5-b6c7-d8e9-f0a1-b2c3d4e5f6a7',
    createdAt: '2023/08/18',
    authorId: '0e10f901-7da7-45c4-9054-14ddd09214ba',
    tags: ['HTTP'],
    title: 'HTTP/1 vs HTTP/2 vs HTTP/3',
    description:
      "It's a part of your daily routine, even as you engage with it at this moment. Yet, have you delved into the workings of the HTTP protocol? Are you acquainted with the distinctions between HTTP versions 1, 2, and 3?",
    urls: ['https://dev.to/accreditly/http1-vs-http2-vs-http3-2k1c'],
  },
  {
    id: 'b8c9d0e1-f2a3-b4c5-d6e7-f8a9b0c1d2e3',
    createdAt: '2023/08/25',
    authorId: 'f47304c4-5e83-4982-bac6-c6fb3e87800e',
    tags: ['Nextjs', 'Server Side Rendering', 'SSR'],
    title: 'Next.js 101: What you should know',
    description:
      'Next.js is praised for its ability to address issues like slow initial page loads and poor SEO by offering both Server Side Rendering (SSR) and static site generation. It provides various features out of the box, including hot code reloading, multiple styling options, TypeScript support, environment variable handling, and automatic code splitting.<br/><br/>Routing in Next.js is based on the filesystem structure, making it simple to create routes by adding JavaScript files to the "pages" directory. It supports dynamic routes and shallow routing. The framework also includes API routing for creating API endpoints.<br/><br/>Next.js provides components and hooks, such as next/link for client-side route transitions, next/head for modifying the <head> of the rendered page, and next/router for accessing the router object.<br/><br/>Next.js features a built-in performance measurement tool for analyzing page performance and tracking Web Vitals. Its command line interface (CLI) allows for various operations, including building optimized production builds, running in development mode, starting in production mode, and exporting the app as a static site.',
    urls: [
      'https://www.netlify.com/blog/2020/06/18/next.js-101-what-you-should-know/',
    ],
  },
];

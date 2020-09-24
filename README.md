# blog

Initially, just an extendable blog template built with Vue and Node.js.

Publishing is streamlined via an editor/publisher component system, allowing content creators to generate content and implement monetization with minimum technical overhead. Content creators are able to custom format their posts with a drag-n-drop formatting system. Upon request, post content is interpreted and delivered in a consistent formatting standard.

## Core components:
- recentPostList.vue
- searchBar.vue
- editor.vue
- publisher.vue
- authenticator.vue

### recentPostList.vue
Lists the most recently created blog posts.

### searchBar.vue
Allows user to search and filter blog posts by title, category, date created, etc.

### editor.vue
Allows authenticated user to create blog posts with specific formatting tools. This will enforce consistency across blog posts while allowing some degree of flexibility.

### publisher.vue
Displays blog posts according to the formatting specified, inserting ads at predetermined break points if monetization is enabled.

### authenticator.vue
Allows user to sign-in given valid credentials. Users who authenticate are given management access to their blog posts.


// 'use client';
// import Link from 'next/link';

// import React, { useState } from 'react';
// import { useParams } from 'next/navigation';

// type Post = {
//   id: string;
//   title: string;
//   content: string;
// };

// const posts: Post[] = [
//   {
//         id: '1',
//         title: 'Introduction to Next.js',
//         content: `Next.js is a React framework that simplifies the development of modern web applications. It provides features such as:
    
//     - **Server-Side Rendering (SSR)**: This allows the rendering of pages on the server before sending them to the client, improving performance and SEO.
//     - **Static Site Generation (SSG)**: Pre-render static pages at build time, making the website faster to load and ideal for blogs or e-commerce.
//     - **API Routes**: Built-in backend functionality for handling server-side logic without the need for an external server.
//     - **File-Based Routing**: Automatically generates routes based on the file structure in the "pages" directory.
    
//     ### Why Use Next.js?
//     - **SEO Optimization**: SSR and SSG ensure search engines can index pages effectively.
//     - **Fast Performance**: Automatic code splitting and optimized rendering enhance speed.
//     - **Developer-Friendly**: Simplifies complex tasks like routing, API handling, and deployment.
    
//     ### Example of Server-Side Rendering
//     Here is a simple example of SSR in Next.js:
//     \`\`\`javascript
//     export async function getServerSideProps() {
//       const data = await fetch('https://api.example.com/data').then((res) => res.json());
//       return { props: { data } };
//     }
    
//     const Page = ({ data }) => <div>{data.title}</div>;
//     export default Page;
//     \`\`\`
    
//     Next.js makes modern web development intuitive and efficient.`,
//       },
//       {
//         id: '2',
//         title: 'Routing in Next.js',
//         content: `Next.js uses a file-based routing system, eliminating the need for external libraries. Here's how routing works:
    
//     ### Static Routes
//     Simply create a file in the "pages" directory:
//     \`\`\`javascript
//     // File: pages/about.js
//     export default function About() {
//       return <h1>About Us</h1>;
//     }
//     \`\`\`
//     This will generate a route at \`/about\`.
    
//     ### Dynamic Routes
//     Dynamic routes are created using square brackets in the file name:
//     \`\`\`javascript
//     // File: pages/post/[id].js
//     import { useRouter } from 'next/router';
    
//     export default function Post() {
//       const { id } = useRouter().query;
//       return <h1>Post ID: {id}</h1>;
//     }
//     \`\`\`
//     This allows you to create routes like \`/post/1\`, \`/post/2\`, etc.
    
//     ### Nested Routes
//     Organize your files into folders for nested routes:
//     \`\`\`text
//     pages/
//       blog/
//         index.js  // Route: /blog
//         [slug].js // Route: /blog/:slug
//     \`\`\`
    
//     ### API Routes
//     API routes are created inside the "pages/api" directory:
//     \`\`\`javascript
//     // File: pages/api/hello.js
//     export default function handler(req, res) {
//       res.status(200).json({ message: 'Hello World!' });
//     }
//     \`\`\`
    
//     With this simple and powerful routing system, Next.js enables seamless navigation and functionality.`,
//       },
//       {
//         id: '3',
//         title: 'Deploying Next.js Apps',
//         content: `Deploying a Next.js application is straightforward and supports a variety of platforms like **Vercel**, **Netlify**, and **AWS**. Here's a step-by-step guide for deployment:
    
//     ### Deploying on Vercel
//     1. Install Vercel CLI:
//     \`\`\`bash
//     npm install -g vercel
//     \`\`\`
//     2. Initialize deployment:
//     \`\`\`bash
//     vercel
//     \`\`\`
//     3. Follow the prompts to link or create a project.
//     4. Once deployed, your app will be live on a custom Vercel domain.
    
//     ### Deploying on Netlify
//     1. Build your app:
//     \`\`\`bash
//     npm run build
//     \`\`\`
//     2. Upload the \`out\` directory to Netlify via the web UI or CLI.
    
//     ### Best Practices
//     - Use \`.env\` files for managing sensitive information.
//     - Optimize images using the Next.js \`<Image>\` component for better performance.
//     - Set up redirects and rewrites in \`next.config.js\` to handle custom paths.
    
//     By following these deployment steps, you can easily make your Next.js application accessible to users around the world.`,
//   },
//   {
//     id: '4',
//     title: 'Optimizing Next.js Performance',
//     content: `Boost your app performance with these tips:

// ### Image Optimization
// Use the \`<Image />\` component for responsive and optimized images:
// \`\`\`javascript
// import Image from 'next/image';

// <Image src="/image.jpg" width={500} height={300} alt="Description" />;
// \`\`\`

// ### Code Splitting
// Next.js automatically splits your code to only load what's needed for the page. Use dynamic imports for additional control:
// \`\`\`javascript
// import dynamic from 'next/dynamic';

// const DynamicComponent = dynamic(() => import('../components/MyComponent'));
// \`\`\`

// ### Caching
// Utilize caching with \`getStaticProps\` or \`getServerSideProps\` for data fetching.

// ### Lazy Loading
// Implement lazy loading for non-critical components using dynamic imports or intersection observers.

// By following these tips, you can significantly enhance the performance of your Next.js application.`,
//   },
//   {
//     id: '5',
//     title: 'API Routes in Next.js',
//     content: `Learn how to build serverless APIs in Next.js with API routes:

// ### Creating an API Route
// API routes live in the "pages/api" directory. Here's an example:
// \`\`\`javascript
// // File: pages/api/hello.js
// export default function handler(req, res) {
//   res.status(200).json({ message: 'Hello World!' });
// }
// \`\`\`

// ### Handling Requests
// Access HTTP methods (GET, POST, etc.) via \`req.method\`:
// \`\`\`javascript
// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Handle POST requests
//     res.status(200).json({ message: 'Post Received!' });
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
// \`\`\`

// ### Using API Routes
// API routes are great for handling server-side logic, such as form submissions, authentication, and database interactions.`,
//   },
// ];

// const Post: React.FC = () => {
//   const params = useParams();
//   const id = params.id;
//   const post = posts.find((post) => post.id === id);

//   const [comments, setComments] = useState<string[]>([]);
//   const [comment, setComment] = useState<string>('');

//   const handleAddComment = () => {
//     if (comment.trim()) {
//       setComments([...comments, comment.trim()]);
//       setComment('');
//     }
//   };

//   if (!post) {
//     return (
//       <div className="flex items-center justify-center h-screen text-gray-600">
//         <p className="text-xl">Post not found!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content Section */}
//       <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-5">
//         <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
//           {/* Post Content */}
//           <div className="p-6">
//             <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
//             <p className="mt-4 whitespace-pre-wrap leading-relaxed text-gray-800">
//               {post.content}
//             </p>
//           </div>

//           {/* Comments Section */}
//           <div className="p-6 border-t border-gray-200">
//             <h2 className="text-2xl font-semibold mb-4">Comments</h2>
//             {comments.length > 0 ? (
//               <ul className="space-y-4">
//                 {comments.map((comment, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800"
//                   >
//                     {comment}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No comments yet. Be the first to comment!</p>
//             )}
//             <div className="mt-6">
//               <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write a comment..."
//                 className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
//               ></textarea>
//               <button
//                 onClick={handleAddComment}
//                 className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//               >
//                 Add Comment
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="mt-8 mb-16 text-center">
//           <Link
//             href="/"
//             className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-gray-700 transition"
//           >
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: '1',
    title: 'Introduction to Next.js',
    content: `Next.js is a React framework that simplifies the development of modern web applications. It is equipped with features like Server-Side Rendering (SSR) for better performance and SEO, and Static Site Generation (SSG) for pre-rendering static pages during build time. Developers also benefit from built-in API Routes and File-Based Routing, which simplify server-side logic and navigation respectively. These features make Next.js an ideal choice for developers looking to create scalable and efficient applications.

### Why is it significant?
Server-Side Rendering improves search engine visibility by rendering content on the server, while Static Site Generation enhances page load times by pre-rendering content. API Routes allow developers to include backend functionality directly within their projects. Together, these tools empower developers to create seamless, high-performance applications.

### Example of Server-Side Rendering
In the following example, data is fetched on the server before being passed to the client:

\`\`\`javascript
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data').then((res) => res.json());
  return { props: { data } };
}

const Page = ({ data }) => <div>{data.title}</div>;
export default Page;
\`\`\`

### Visual Explanation of SSR
Below is a diagram illustrating how SSR works in practice:

![Server-Side Rendering Flow](https://example.com/ssr-diagram.png)

SSR fetches data from the server, renders the page on the server-side, and sends the fully rendered HTML to the browser. This ensures faster page loads and better SEO compared to traditional client-side rendering.`,
    imageUrl: '/images/introduction.webp',
  },
  {
    id: '2',
    title: 'Routing in Next.js',
    content: `Next.js offers a file-based routing system that is both powerful and simple. Static routes can be easily created by adding a file in the "pages" directory. Dynamic routing, on the other hand, allows routes like \`/post/:id\` to be handled seamlessly with square bracket notation.

### Why is it significant?
Dynamic routing enables the creation of flexible and scalable applications. Nested routing supports organizing related pages under a common structure, and API Routes integrate backend functionality directly into your project.

### Example of Dynamic Routes
Below is an example of dynamic routing in Next.js:

\`\`\`javascript
// File: pages/post/[id].js
import { useRouter } from 'next/router';

export default function Post() {
  const { id } = useRouter().query;
  return <h1>Post ID: {id}</h1>;
}
\`\`\``,
    imageUrl: '/images/routing.webp',
  },
  {
    id: '3',
    title: 'Deploying Next.js Apps',
    content: `Deploying a Next.js application is straightforward with platforms like Vercel, Netlify, and AWS. For example, deploying on Vercel involves installing the CLI, initializing the deployment, and following simple prompts. Netlify requires building the application and uploading the \`out\` directory via their interface or CLI.

### Why is it significant?
Streamlined deployment processes reduce the time and effort needed to make applications available to users. Vercel, being the creator of Next.js, offers an optimized hosting solution, while Netlify provides flexibility for various use cases.

### Deployment Example
Commands for deploying on Vercel:
\`\`\`bash
npm install -g vercel
vercel
\`\`\``,
    imageUrl: '/images/Deploying.webp',
  },
  {
    id: '4',
    title: 'Optimizing Next.js Performance',
    content: `Performance optimization is crucial for any web application. Next.js provides tools like the \`<Image />\` component for responsive and optimized images. Dynamic imports ensure code splitting, reducing the load time by only loading required components.

### Why is it significant?
Optimized performance improves user experience by reducing page load times and ensuring efficient resource usage. Features like lazy loading and caching strategies implemented via \`getStaticProps\` or \`getServerSideProps\` further enhance speed and scalability.

### Example of Image Optimization
\`\`\`javascript
import Image from 'next/image';

<Image src="/image.jpg" width={500} height={300} alt="Description" />;
\`\`\``,
    imageUrl: '/images/Optimizing.webp',
  },
  {
    id: '5',
    title: 'API Routes in Next.js',
    content: `API routes in Next.js allow developers to create serverless backend functionality within the same application. These routes handle HTTP requests and are located in the "pages/api" directory.

### Why is it significant?
With API Routes, developers can build full-stack applications without managing a separate server. This reduces complexity and streamlines development workflows.

### Example of an API Route
Here is a basic example:
\`\`\`javascript
// File: pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World!' });
}
\`\`\``,
    imageUrl: '/images/API routes.webp',
  },
];

const Post: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const post = posts.find((post) => post.id === id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      setComments([...comments, { name: name.trim(), comment: comment.trim() }]);
      setName('');
      setComment('');
    }
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        <p className="text-xl">Post not found!</p>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-5">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            <Image src={post.imageUrl} alt={post.title} width={800} height={400} className="my-4 rounded-lg" />
            <p className="mt-4 whitespace-pre-wrap leading-relaxed text-gray-800">
              {post.content}
            </p>
          </div>
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {comments.length > 0 ? (
              <ul className="space-y-4">
                {comments.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800"
                  >
                    <span className="font-medium text-blue-600">{item.name}:</span>
                    <span>{item.comment}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
            <div className="mt-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full p-4 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              ></textarea>
              <button
                onClick={handleAddComment}
                className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-16 text-center">
          <Link
            href="/"
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;


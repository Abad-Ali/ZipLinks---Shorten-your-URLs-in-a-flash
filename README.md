# 🚀 ZipLinks – Shorten your URLs in a flash

**ZipLinks** is a full-stack web application that allows users to shorten long URLs quickly and efficiently. Built with Next.js, Tailwind CSS, and MongoDB, ZipLinks provides a seamless user experience for managing shortened links.

---

## 🔗 Live Preview

Check out the live demo of ZipLinks [here](https://zip-links-shorten-your-ur-ls-in-a-f.vercel.app/) 🚀

---

## ✨ Features

* ⚡ **Instant URL Shortening**: Quickly convert long URLs into short, shareable links.
* 📱 **Responsive Design**: Optimized for both desktop and mobile devices.
* 🗄️ **MongoDB Integration**: Store and manage shortened URLs in a NoSQL database.
* 🎨 **Tailwind CSS Styling**: Utilize a utility-first CSS framework for modern UI components.

---

## 🛠️ Tech Stack

* 🖥️ **Frontend**: Next.js
* 🎨 **Styling**: Tailwind CSS
* ⚙️ **Backend**: Node.js
* 🗃️ **Database**: MongoDB

---

## 📦 Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash.git
   cd ZipLinks---Shorten-your-URLs-in-a-flash
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## 📝 How to Use

1. Open the app in your browser.
2. On the homepage, click the **Try Now** button.
3. You will be redirected to the `/shorten` page.
4. Enter the long URL you want to shorten in the input field.
5. Optionally, pick or enter a custom short link.
6. Click the **Shorten** button.
7. Your shortened URL will be generated instantly and displayed below.
8. Click the shortened link to test it or copy it to share with others.
9. You can view the list of your previously shortened URLs (if applicable).

Enjoy sharing cleaner, shorter links!

---

## 🗂️ Folder Structure

```
app                 # Main Next.js app directory with pages and routing
├── [url]           # Dynamic route folder for URL handling
│   └── page.js     # Page component for dynamic URL
├── about           # About page folder
│   └── page.jsx    # About page component
├── api             # API routes folder
│   └── users       # User-related API routes
│       └── route.js # API route handler
├── contact         # Contact page folder
│   └── page.js     # Contact page component
├── shorten         # URL shortening page folder
│   └── page.jsx    # Shorten page component
├── favicon.ico     # Favicon file
├── globals.css     # Global CSS styles
├── layout.js       # Root layout component
└── page.js         # Home page component
components          # React components
├── Footer.jsx      # Footer component
└── Navbar.jsx      # Navbar component
lib                 # Helper libraries
└── mongodb.js      # MongoDB connection utility
models              # Database schemas
└── User.js         # User schema model
public              # Static assets folder
├── About.jpg       # Image assets
├── contact.avif
├── file.svg
├── generate.jpg
├── github.svg
├── globe.svg
├── link.jpg
├── social_media.avif
├── support.avif
├── vector2.jpeg
└── window.svg
.gitignore          # Git ignore configuration
README.md           # Project documentation
Screenshot 2025-10-05 122810.png         # Screenshot images
Screenshot 2025-10-05 123007.png         # Screenshot images
Screenshot 2025-10-05 123028.png         # Screenshot images
Screenshot 2025-10-05 123050.png         # Screenshot images
Screenshot_2025-10-05-18-37-23-71.jpg    # Screenshot images
eslint.config.mjs   # ESLint configuration
favicon.ico         # Another favicon (?)
jsconfig.json       # JS config for path aliases
next.config.mjs     # Next.js config file
package-lock.json   # Exact dependency tree
package.json        # Project dependencies and scripts
postcss.config.mjs  # PostCSS config for Tailwind CSS
```

---

## 📸 Screenshots
<details>
  <summary>Click to expand</summary>

  ![Home](https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash/blob/28dd3cd1e0e3c1ac007feeb84183127f895d8a18/Screenshot%202025-10-05%20122810.png)
  
  ![About](https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash/blob/28dd3cd1e0e3c1ac007feeb84183127f895d8a18/Screenshot%202025-10-05%20123007.png)

 ![Contact](https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash/blob/28dd3cd1e0e3c1ac007feeb84183127f895d8a18/Screenshot%202025-10-05%20123028.png)

 ![shorten](https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash/blob/28dd3cd1e0e3c1ac007feeb84183127f895d8a18/Screenshot%202025-10-05%20123050.png)

 ![MobileView](https://github.com/Abad-Ali/ZipLinks---Shorten-your-URLs-in-a-flash/blob/28dd3cd1e0e3c1ac007feeb84183127f895d8a18/Screenshot_2025-10-05-18-37-23-71.jpg)

</details>

---

## 👤 Author

**Abad Ali**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abad-Ali) 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abadali-dev)

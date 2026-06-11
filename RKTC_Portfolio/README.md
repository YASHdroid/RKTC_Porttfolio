RKTC_Portfolio/
├── client/                        ← Frontend (Vite + React)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── About.jsx
│   │   │   ├── PastWork.jsx
│   │   │   ├── DealsIn.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── admin/
│   │   │       ├── Login.jsx
│   │   │       ├── Dashboard.jsx
│   │   │       ├── Inquiries.jsx
│   │   │       └── Products.jsx
│   │   ├── components/            ← Shared components (Navbar, Footer etc.)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── server/                        ← Backend (Node.js + Express)
│   ├── models/
│   │   ├── Inquiry.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── inquiryRoutes.js
│   │   ├── productRoutes.js
│   │   └── adminRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js      ← JWT verification
│   ├── .env                       ← DB URL, JWT secret (never push to GitHub)
│   ├── package.json
│   └── index.js                   ← Express app entry point
│
├── .gitignore
└── README.md
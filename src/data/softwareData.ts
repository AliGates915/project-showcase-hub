export type CategoryType = 'ecommerce' | 'calllogs' | 'pos' | 'erp' | 'distribution';

export interface Software {
  name: string;
  url: string;
  company: 'Infinity Byte' | 'Core Tech' | 'Sky Links';
}

export interface Category {
  id: CategoryType;
  title: string;
  icon: string;
  description: string;
  credentials: {
    admin: { email: string; password: string };
    user?: { email: string; password: string };
  };
  software: Software[];
}


export const ecommerceFeatures = {
  core: [
    "Product catalog with categories, search & filters",
    "Shopping cart with persistent storage",
    "Secure checkout and order placement",
    "User authentication and account management",
    "Responsive shopping experience",
    "Real-time notifications for actions",
  ],
  admin: [
    "Admin dashboard for product control",
    "Add, edit, and delete products",
    "Order management and tracking",
    "Sales and customer analytics",
  ],
};

export const callLogsFeatures = {
  core: [
    "Client call and meeting logging system",
    "Track call status (pending, completed, follow-up required)",
    "Add detailed notes for every client interaction",
    "Assign calls and meetings to staff members",
    "Search and filter records by client, date, or status",
    "Simple and responsive dashboard for daily use",
  ],

  admin: [
    "Central dashboard for complete system control",
    "Manage staff members and their responsibilities",
    "Create, assign, and track follow-up tasks",
    "View full call and meeting history of all clients",
    "Monitor staff performance and activity progress",
    "Ensure no client follow-up is missed",
  ],
};


export const posFeatures = {
  core: [
    "Sales management with fast billing and invoicing",
    "Purchase entry and supplier order tracking",
    "Customer management with purchase history",
    "Order booking and real-time order status",
    "Item-wise sales tracking and stock visibility",
    "Support for cash and credit-based transactions",
    "Daily sales summary and transaction records",
  ],

  admin: [
    "Central dashboard for sales and purchase control",
    "Manage products, pricing, and stock levels",
    "Approve and monitor sales and purchase orders",
    "Track profit, revenue, and daily performance",
    "User role management for counter staff",
    "Generate sales, purchase, and inventory reports",
  ],
};


export const erpFeatures = {
  core: [
    "Centralized business management across all departments",
    "Customer and supplier management with complete records",
    "Sales, purchase, and invoicing management",
    "Inventory and stock control across multiple locations",
    "Accounts, payments, and ledger tracking",
    "Role-based access for different departments",
    "Real-time business data visibility",
  ],

  admin: [
    "Complete control over company operations",
    "Manage users, roles, and department permissions",
    "Configure business rules, taxes, and pricing",
    "Monitor sales, purchases, and financial performance",
    "Generate detailed operational and financial reports",
    "Audit trail for system activities and changes",
  ],
};

export const distributionFeatures = {
  core: [
    "Order management from booking to delivery",
    "Distributor, retailer, and customer management",
    "Warehouse-wise stock and inventory tracking",
    "Route planning and delivery status monitoring",
    "Salesman order booking and field activity tracking",
    "Real-time stock availability during order placement",
    "Invoice and delivery note generation",
  ],

  admin: [
    "Central dashboard for complete distribution control",
    "Manage warehouses, routes, and delivery areas",
    "Monitor salesman performance and activities",
    "Approve and track orders and deliveries",
    "Control inventory movement across warehouses",
    "Generate sales, delivery, and stock reports",
  ],
};




export const categories: Category[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: 'ShoppingCart',
    description: 'Full-featured online shopping platforms with product management, cart, and checkout systems.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: 'admin1122' },
      user: { email: 'user@gmail.com', password: '1122' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://e-commerce-infinity-byte-10.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-ecommerce.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-e-commerce.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'calllogs',
    title: 'CRM',
    icon: 'Phone',
    description: 'Comprehensive call tracking and logging systems for business communication management.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: 'Admin@2025' },
      user: { email: 'mahnoorkhan@gmail.com', password: 'Noor45' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://cms-logs-frontend.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-call-logs-xi.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-call-logs-one.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'pos',
    title: 'Point of Sales',
    icon: 'CreditCard',
    description: 'Modern POS systems for retail operations with inventory and sales tracking.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: '123' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://pos-frontend-eta-blue.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-pos.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-pos.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'erp',
    title: 'ERP System',
    icon: 'Building2',
    description: 'Enterprise Resource Planning solutions for complete business process management.',
    credentials: {
      admin: { email: 'admin@gmail.com', password: 'admin123' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://erp-frontend-fawn-five.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-erp.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://sky-link-erp.vercel.app/', company: 'Sky Links' },
    ],
  },
  {
    id: 'distribution',
    title: 'Distribution System',
    icon: 'Truck',
    description: 'Distribution and logistics management for efficient supply chain operations.',
    credentials: {
      admin: { email: 'info@gmail.com', password: '1122' },
    },
    software: [
      { name: 'Infinity Byte', url: 'https://city-traders-lhr.vercel.app/', company: 'Infinity Byte' },
      { name: 'Core Tech', url: 'https://core-tech-distribution.vercel.app/', company: 'Core Tech' },
      { name: 'Sky Links', url: 'https://core-tech-distribution.vercel.app/', company: 'Sky Links' },
    ],
  },
];

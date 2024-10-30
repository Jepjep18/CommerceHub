/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'group',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon : 'heroicons_outline:chart-pie',
                link: 'dashboard'
            }
        ]
    },
    {
        id: 'user-management',
        title: 'User Management',
        type: 'group',
        children: [ 
            {
                id: 'user-management',
                title: 'User Management',
                type: 'collapsable',
                icon: 'heroicons_outline:user-group', 
                children: [
                    {
                        id: 'view-users',
                        title: 'View Users',
                        type: 'basic',
                        icon: 'heroicons_outline:users', 
                        link: 'admins/view-users',
                    },
                    {
                        id: 'roles-and-permission',
                        title: 'Roles & Permission',
                        type: 'basic',
                        icon: 'heroicons_outline:shield-check', 
                        link: 'admins/roles-and-permission'
                    }
                ]
            }
        ]
    },
    {
        id: 'product-management',
        title: 'Product Management',
        type: 'group',
        children: [
            {
                id: 'product-management',
                title: 'Product Management',
                type: 'collapsable',
                icon: 'heroicons_outline:collection', 
                children: [
                    {
                        id: 'view-products',
                        title: 'View Products',
                        type: 'basic',
                        icon: 'heroicons_outline:collection', 
                        link: 'product-management/view-products',
                    },
                    {
                        id: 'add-products',
                        title: 'Add Products',
                        type: 'basic',
                        icon: 'heroicons_outline:plus-circle', 
                        link: 'product-management/add-products',
                    },
                    {
                        id: 'categories',
                        title: 'Categories',
                        type: 'basic',
                        icon: 'heroicons_outline:tag', 
                        link: 'product-management/categories',
                    }
                ]
            }
        ]
    },
    {
        id: 'order-management',
        title: 'Order Management',
        type: 'group',
        children : [
            {
                id: 'order-management',
                title: 'Order Management',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard-list', // Icon for order management
                children : [
                    {
                        id: 'view-orders',
                        title: 'View Orders',
                        type: 'basic',
                        icon : 'heroicons_outline:eye', // Icon for viewing orders
                        link: 'order-management/view-orders'
                    },
                    {
                        id: 'order-status-management',
                        title: 'Order Status Management',
                        type: 'basic',
                        icon : 'heroicons_outline:adjustments', // Icon for managing order statuses
                        link: 'order-management/order-status-management'
                    }
                ]
            }
        ]
    },
    {
        id: 'inventory-management',
        title: 'Inventory Management',
        type: 'group',
        children: [
            {
                id: 'inventory-management',
                title: 'Inventory Management',
                type: 'collapsable',
                icon: 'heroicons_outline:archive', // Icon for inventory management
                children: [
                    {
                        id: 'stock-levels',
                        title: 'Stock Levels',
                        type: 'basic',
                        icon: 'heroicons_outline:chart-pie', // Icon for stock levels
                        link: 'inventory-management/stock-levels'
                    },
                    {
                        id: 'low-stock-alerts',
                        title: 'Low Stock Alerts',
                        type: 'basic',
                        icon: 'heroicons_outline:exclamation-circle', // Icon for low stock alerts
                        link: 'inventory-management/low-stock-alerts'
                    }
                ]
            }
        ]
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'group',
        children: [
            {
                id: 'reports',
                title: 'Generate Reports',
                type: 'basic',
                icon: 'heroicons_outline:document-report', // Icon for reports
                link: 'reports/reports'
            }
        ]
    },
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

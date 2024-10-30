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
                link: ''
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
                        link: '',
                    },
                    {
                        id: 'roles-and-permission',
                        title: 'Roles & Permission',
                        type: 'basic',
                        icon: 'heroicons_outline:shield-check', 
                        link: ''
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
                        link: '',
                    },
                    {
                        id: 'add-products',
                        title: 'Add Products',
                        type: 'basic',
                        icon: 'heroicons_outline:plus-circle', 
                        link: ''
                    },
                    {
                        id: 'categories',
                        title: 'Categories',
                        type: 'basic',
                        icon: 'heroicons_outline:tag', 
                        link: ''
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
                        link: ''
                    },
                    {
                        id: 'order-status-management',
                        title: 'Order Status Management',
                        type: 'basic',
                        icon : 'heroicons_outline:adjustments', // Icon for managing order statuses
                        link: ''
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
                        link: ''
                    },
                    {
                        id: 'low-stock-alerts',
                        title: 'Low Stock Alerts',
                        type: 'basic',
                        icon: 'heroicons_outline:exclamation-circle', // Icon for low stock alerts
                        link: ''
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
                title: 'Reports',
                type: 'basic',
                icon: 'heroicons_outline:document-report', // Icon for reports
                link: ''
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

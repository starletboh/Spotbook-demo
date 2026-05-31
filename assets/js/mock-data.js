/**
 * SPOTBOOK DEMO — MOCK DATA
 * All data is hardcoded for the static GitHub Pages demo.
 */

window.DEMO = window.DEMO || {};

// ── Current logged-in user ──────────────────────────────────────────────────
DEMO.currentUser = {
    id: 1,
    fullName: 'Alexandra Papadopoulos',
    username: 'alexandra.p',
    role: 'admin',
    organizationId: 'Velvet Shore Beach Club'
};

DEMO.currentUserPermissions = ['*']; // wildcard = all permissions

// ── Today's date helpers ────────────────────────────────────────────────────
DEMO.today = new Date().toISOString().split('T')[0];

// ── Venue / Organization ────────────────────────────────────────────────────
DEMO.organization = {
    name: 'Velvet Shore Beach Club',
    plan: 'Professional',
    timezone: 'Europe/Athens'
};

// ── Layout grid (sunbeds / spots) ───────────────────────────────────────────
DEMO.gridColumns = 8;
DEMO.grid = [];

const statuses = ['free', 'reserved', 'arrived', 'free', 'free', 'reserved', 'free', 'arrived'];
const colors   = ['#7b2cff','#e74c3c','#2ecc71','#7b2cff','#7b2cff','#e74c3c','#7b2cff','#2ecc71'];

const reservationPool = [
    { customerName: 'Maria Konstantinou',  customerPhone: '+30 697 111 2233', startTime: '10:00', endTime: '18:00', notes: 'Prefers window / front-row seating. Allergic to shellfish.', status: 'reserved', checkedIn: false },
    { customerName: 'Nikos Alexiou',       customerPhone: '+30 694 222 3344', startTime: '11:00', endTime: '17:00', notes: 'VIP guest. Celebrating anniversary.', status: 'reserved', checkedIn: false },
    { customerName: 'Elena Stavros',       customerPhone: '+30 693 333 4455', startTime: '09:00', endTime: '14:00', notes: 'Frequent customer. Do not seat near speakers.', status: 'arrived',  checkedIn: true  },
    { customerName: 'Dimitris Papadakis',  customerPhone: '+30 698 444 5566', startTime: '12:00', endTime: '20:00', notes: 'Birthday dinner. Surprise cake arranged with kitchen.', status: 'reserved', checkedIn: false },
    { customerName: 'Sofia Nikolaou',      customerPhone: '+30 695 555 6677', startTime: '10:30', endTime: '16:30', notes: 'Corporate group booking. Requires invoice.', status: 'reserved', checkedIn: false },
    { customerName: 'Giorgos Petrakis',    customerPhone: '+30 696 666 7788', startTime: '13:00', endTime: '19:00', notes: 'Prefers premium section. Regular.', status: 'arrived',  checkedIn: true  },
    { customerName: 'Katerina Vlachou',    customerPhone: '+30 697 777 8899', startTime: '08:00', endTime: '13:00', notes: 'Early arrival. Allergic to nuts.', status: 'arrived',  checkedIn: true  },
    { customerName: 'Andreas Theodorou',   customerPhone: '+30 698 888 9900', startTime: '14:00', endTime: '21:00', notes: 'Weekend reservation. Large group, table merge requested.', status: 'reserved', checkedIn: false },
    { customerName: 'Irini Lamprou',       customerPhone: '+30 693 999 0011', startTime: '10:00', endTime: '18:00', notes: 'VIP arrival expected. Manager approval required.', status: 'reserved', checkedIn: false },
    { customerName: 'Vasilis Christodoulou', customerPhone: '+30 694 100 2200', startTime: '11:30', endTime: '17:30', notes: 'Shift handover note: guest requested extra towels.', status: 'arrived', checkedIn: true },
];

let resId = 1;
const rows = 3;
const cols = DEMO.gridColumns;
const labels = ['A','B','C','D','E','F'];

for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
        const label = labels[row - 1] + col;
        const idx   = (row * cols + col) % statuses.length;
        const status = statuses[idx];
        let bookingDetails = [];
        if (status !== 'free') {
            const res = { ...reservationPool[resId % reservationPool.length] };
            res.resId = resId++;
            res.id    = res.resId;
            res.status = status === 'arrived' ? 'arrived' : 'reserved';
            res.checkedIn = status === 'arrived';
            bookingDetails = [res];
        }
        DEMO.grid.push({
            id: row * 100 + col,
            label,
            rowNumber: row,
            status,
            price: [20, 25, 30, 35][col % 4],
            color: status === 'free' ? '#7b2cff' : status === 'arrived' ? '#2ecc71' : '#e74c3c',
            bookingDetails,
            isMaintenance: false
        });
    }
}

// ── Dashboard summary ───────────────────────────────────────────────────────
DEMO.summary = (() => {
    const booked  = DEMO.grid.filter(s => s.status !== 'free').length;
    const free    = DEMO.grid.filter(s => s.status === 'free').length;
    const revenue = DEMO.grid.reduce((sum, s) => sum + (s.status !== 'free' ? s.price : 0), 0);
    return { booked, free, revenue };
})();

// ── Users ───────────────────────────────────────────────────────────────────
DEMO.users = [
    { id: 1, fullName: 'Alexandra Papadopoulos', username: 'alexandra.p',   role: 'admin'   },
    { id: 2, fullName: 'Kostas Georgiou',         username: 'kostas.g',      role: 'manager' },
    { id: 3, fullName: 'Thalia Papageorgiou',     username: 'thalia.p',      role: 'manager' },
    { id: 4, fullName: 'Stavros Makris',          username: 'stavros.m',     role: 'staff'   },
    { id: 5, fullName: 'Despina Hatzi',           username: 'despina.h',     role: 'staff'   },
    { id: 6, fullName: 'Panagiotis Rousis',       username: 'panagiotis.r',  role: 'staff'   },
    { id: 7, fullName: 'Eleni Tsiftsi',           username: 'eleni.t',       role: 'staff'   },
    { id: 8, fullName: 'Christos Vamvakidis',     username: 'christos.v',    role: 'staff'   },
];

// ── Roles & Permissions ─────────────────────────────────────────────────────
DEMO.roles = {
    admin: {
        label: 'Administrator',
        color: '#7b2cff',
        permissions: ['*']
    },
    manager: {
        label: 'Venue Manager',
        color: '#3498db',
        permissions: [
            'panels.dashboard','panels.floorplan','panels.analytics','panels.audit_logs',
            'reservations.view','reservations.create','reservations.update','reservations.cancel','reservations.checkin',
            'floorplan.create','floorplan.edit','floorplan.delete',
            'analytics.view','analytics.export',
            'logs.view','settings.read'
        ]
    },
    staff: {
        label: 'Staff',
        color: '#2ecc71',
        permissions: [
            'panels.dashboard','panels.floorplan',
            'reservations.view','reservations.create','reservations.update','reservations.checkin'
        ]
    },
    host: {
        label: 'Host / Reception',
        color: '#e67e22',
        permissions: [
            'panels.dashboard','panels.floorplan',
            'reservations.view','reservations.create','reservations.checkin'
        ]
    },
    viewer: {
        label: 'Viewer (Read-only)',
        color: '#95a5a6',
        permissions: ['panels.dashboard','panels.floorplan','reservations.view']
    }
};

// ── All permission definitions ──────────────────────────────────────────────
DEMO.allPermissions = [
    { group: 'Panels', key: 'panels.dashboard',    label: 'Dashboard' },
    { group: 'Panels', key: 'panels.floorplan',    label: 'Floor Plan' },
    { group: 'Panels', key: 'panels.users',        label: 'Users' },
    { group: 'Panels', key: 'panels.settings',     label: 'Settings' },
    { group: 'Panels', key: 'panels.audit_logs',   label: 'Audit Logs' },
    { group: 'Panels', key: 'panels.analytics',    label: 'Analytics' },

    { group: 'Reservations', key: 'reservations.view',   label: 'View' },
    { group: 'Reservations', key: 'reservations.create', label: 'Create' },
    { group: 'Reservations', key: 'reservations.update', label: 'Update' },
    { group: 'Reservations', key: 'reservations.cancel', label: 'Cancel' },
    { group: 'Reservations', key: 'reservations.checkin',label: 'Check-In' },

    { group: 'Floor Plan', key: 'floorplan.create', label: 'Create Spot' },
    { group: 'Floor Plan', key: 'floorplan.edit',   label: 'Edit Spot' },
    { group: 'Floor Plan', key: 'floorplan.delete', label: 'Delete Spot' },

    { group: 'Analytics', key: 'analytics.view',   label: 'View' },
    { group: 'Analytics', key: 'analytics.export', label: 'Export CSV' },

    { group: 'Users', key: 'users.view',       label: 'View Users' },
    { group: 'Users', key: 'users.create',     label: 'Create User' },
    { group: 'Users', key: 'users.edit.all',   label: 'Edit All Users' },
    { group: 'Users', key: 'users.delete',     label: 'Delete User' },

    { group: 'Roles', key: 'roles.view',   label: 'View Roles' },
    { group: 'Roles', key: 'roles.edit',   label: 'Edit Roles' },
    { group: 'Roles', key: 'roles.create', label: 'Create Role' },
    { group: 'Roles', key: 'roles.delete', label: 'Delete Role' },

    { group: 'Logs', key: 'logs.view',  label: 'View Logs' },
    { group: 'Logs', key: 'logs.purge', label: 'Purge Logs' },

    { group: 'Settings', key: 'settings.read',       label: 'Read Settings' },
    { group: 'Settings', key: 'settings.write',      label: 'Write Settings' },
    { group: 'Settings', key: 'settings.factory_reset', label: 'Factory Reset' },
];

// ── Audit logs ──────────────────────────────────────────────────────────────
DEMO.logs = [
    { id: 1,  timestamp: '2025-05-31T09:14:22Z', user: 'alexandra.p', action: 'reservation.create',  detail: 'Spot B3 — Maria Konstantinou (10:00–18:00)' },
    { id: 2,  timestamp: '2025-05-31T09:18:05Z', user: 'stavros.m',   action: 'reservation.checkin', detail: 'Spot A6 — Giorgos Petrakis arrived' },
    { id: 3,  timestamp: '2025-05-31T09:45:12Z', user: 'kostas.g',    action: 'reservation.create',  detail: 'Spot C2 — Dimitris Papadakis (12:00–20:00)' },
    { id: 4,  timestamp: '2025-05-31T10:01:33Z', user: 'despina.h',   action: 'reservation.create',  detail: 'Spot A4 — Sofia Nikolaou (10:30–16:30)' },
    { id: 5,  timestamp: '2025-05-31T10:22:44Z', user: 'stavros.m',   action: 'reservation.checkin', detail: 'Spot B1 — Elena Stavros arrived' },
    { id: 6,  timestamp: '2025-05-31T10:55:01Z', user: 'alexandra.p', action: 'user.create',         detail: 'New user eleni.t (role: staff)' },
    { id: 7,  timestamp: '2025-05-31T11:10:17Z', user: 'kostas.g',    action: 'settings.update',     detail: 'Grid default end time changed to 19:00' },
    { id: 8,  timestamp: '2025-05-31T11:32:59Z', user: 'thalia.p',    action: 'reservation.create',  detail: 'Spot C7 — Irini Lamprou (10:00–18:00)' },
    { id: 9,  timestamp: '2025-05-31T11:48:20Z', user: 'panagiotis.r',action: 'reservation.cancel',  detail: 'Spot A2 — Reservation #14 cancelled (no-show)' },
    { id: 10, timestamp: '2025-05-31T12:05:37Z', user: 'stavros.m',   action: 'reservation.checkin', detail: 'Spot C4 — Katerina Vlachou arrived' },
    { id: 11, timestamp: '2025-05-31T12:20:08Z', user: 'kostas.g',    action: 'floorplan.create',    detail: 'Added spot D1 to layout (Row 4)' },
    { id: 12, timestamp: '2025-05-31T12:44:55Z', user: 'alexandra.p', action: 'reservation.create',  detail: 'Spot B5 — Nikos Alexiou (11:00–17:00) — VIP' },
    { id: 13, timestamp: '2025-05-31T13:01:13Z', user: 'despina.h',   action: 'reservation.create',  detail: 'Spot A7 — Andreas Theodorou (14:00–21:00)' },
    { id: 14, timestamp: '2025-05-31T13:15:29Z', user: 'thalia.p',    action: 'role.edit',           detail: 'Role "host" permissions updated' },
    { id: 15, timestamp: '2025-05-31T13:30:00Z', user: 'eleni.t',     action: 'reservation.checkin', detail: 'Spot B8 — Vasilis Christodoulou arrived' },
];

// ── Analytics data ──────────────────────────────────────────────────────────
DEMO.analytics = {
    summary: {
        revenue:      '4,320.00',
        occupancy:    78,
        totalBookings: 156,
        revpab:       '27.69',
        leadTime:     '3.4 Days',
        arrivalRate:  91,
        cancelRate:   6,
    },
    rowStats: [
        { row: 1, label: 'Row A', bookings: 58, revenue: 1450, occupancy: 82 },
        { row: 2, label: 'Row B', bookings: 52, revenue: 1300, occupancy: 76 },
        { row: 3, label: 'Row C', bookings: 46, revenue: 1570, occupancy: 74 },
    ],
    hourlyDistribution: [
        { hour: 8,  count: 12 },
        { hour: 9,  count: 24 },
        { hour: 10, count: 38 },
        { hour: 11, count: 45 },
        { hour: 12, count: 52 },
        { hour: 13, count: 48 },
        { hour: 14, count: 41 },
        { hour: 15, count: 35 },
        { hour: 16, count: 28 },
        { hour: 17, count: 20 },
        { hour: 18, count: 15 },
        { hour: 19, count: 8  },
    ]
};

// ── Settings (for demo display) ─────────────────────────────────────────────
DEMO.settings = {
    'system.currency':             'EUR',
    'system.timezone':             'Europe/Athens',
    'system.language':             'en',
    'grid.default_start_time':     '10:00',
    'grid.default_end_time':       '19:00',
    'grid.columns':                8,
    'reservation.show_price_in_modal': true,
    'reservation.show_row_in_modal':   true,
    'notifications.enabled':       true,
    'notifications.checkin_alert': true,
};

/**
 * SPOTBOOK DEMO — CORE APP
 * Replaces auth, permissions, locales, theme, settings, notifications.
 * All backend calls stubbed with mock data.
 */

// ── Global state (mirrors originals) ────────────────────────────────────────
window.currentUser            = DEMO.currentUser;
window.currentUserPermissions = DEMO.currentUserPermissions;

// ── Translation (minimal stub — just return key or a map) ───────────────────
const TRANSLATIONS = {
    'dashboard.title':           'Management Dashboard',
    'dashboard.organization':    'Organization:',
    'dashboard.welcome':         'Welcome back',
    'dashboard.view_stats_for':  'View Stats For:',
    'dashboard.todays_bookings': "Today's Bookings",
    'dashboard.available':       'Available',
    'dashboard.revenue':         'Revenue (Est)',
    'dashboard.todays_reservations': "Today's Reservations",
    'dashboard.no_reservations': 'No reservations for this date.',
    'dashboard.spot':            'Spot',
    'dashboard.customer':        'Customer',
    'dashboard.time':            'Time',
    'dashboard.status':          'Status',

    'floorplan.title':           'Floor Plan Management',
    'floorplan.header':          'Floor Plan',
    'floorplan.search_placeholder': 'Search (e.g. A1)…',
    'floorplan.manage':          'Manage',
    'floorplan.rows':            'Rows:',
    'floorplan.layout_config':   'Layout Configuration',
    'floorplan.label':           'Label (e.g. A1)',
    'floorplan.row_number':      'Row Number',
    'floorplan.add_layout':      'Add to Layout',
    'floorplan.enable_delete':   'Enable Delete Mode',
    'floorplan.spot_details':    'Spot Details',

    'reservation.spot':          'Spot',
    'reservation.row':           'Row',
    'reservation.guest':         'Guest',
    'reservation.phone':         'Phone',
    'reservation.notes':         'Notes',
    'reservation.time':          'Time',
    'reservation.arrived':       'Check-In',
    'reservation.create_new':    '+ New Reservation',
    'reservation.new_reservation': 'New Reservation',
    'reservation.customer_name': 'Customer Name',
    'reservation.customer_name_placeholder': 'Full name…',
    'reservation.phone_placeholder': '+30 6…',
    'reservation.confirm':       'Confirm Reservation',
    'reservation.no_reservations': 'No reservations for this spot.',
    'reservation.error_name_required': 'Customer name is required.',

    'status.free':        'Free',
    'status.reserved':    'Reserved',
    'status.arrived':     'Arrived',
    'status.checked_in':  'Checked-In',
    'status.maintenance': 'Maintenance',
    'status.unknown':     'Unknown',

    'analytics.title':      'Analytics Dashboard',
    'analytics.subtitle':   'Performance overview for selected date range.',
    'analytics.to':         'to',
    'analytics.all_rows':   'All Rows',
    'analytics.export':     'Export Data',
    'analytics.total_revenue': 'Total Revenue',
    'analytics.revenue_hint':  'Based on dynamic pricing.',
    'analytics.occupancy_rate': 'Occupancy Rate',
    'analytics.occupancy_hint': 'Bed allocation density.',
    'analytics.total_bookings_title': 'Total Bookings',
    'analytics.bookings_hint': 'Active reservations in window.',
    'analytics.revpab':        'RevPAB (Per Bed Yield)',
    'analytics.revpab_hint':   'Revenue per available bed',
    'analytics.lead_time':     'Avg Booking Window',
    'analytics.lead_time_hint':'Days booked in advance.',
    'analytics.arrival_status':'Arrival Rate',
    'analytics.cancellations': 'Cancellation Rate',
    'analytics.revenue_per_row': 'Revenue per Row',
    'analytics.occupancy':     'Occupancy Rate',
    'analytics.cancellations_chart': 'Cancellations',
    'analytics.peak_hours':    'Peak Booking Hours',
    'analytics.label.all_rows': 'All Rows',
    'analytics.error.permission_denied': 'Permission denied.',
    'analytics.error.export_denied': 'Export access denied.',

    'users.title':     'User Management',
    'users.subtitle':  'Manage administrative access and roles.',
    'users.add_new':   'Add New User',
    'users.details':   'User Details',
    'users.role':      'Role',
    'users.actions':   'Actions',
    'users.full_name': 'Full Name',
    'users.username':  'Username',
    'users.password':  'Password',
    'users.password_hint': 'Leave blank to keep current password.',
    'users.select_role': 'Select a role',
    'users.create_title': 'Register User',
    'users.create_subtitle': 'Create a new administrative account',
    'users.no_accounts': 'No accounts found.',
    'users.permission_denied_view': 'Permission denied.',

    'roles.title': 'Manage Roles',

    'logs.title':  'Audit Logs',

    'settings.title': 'Settings',

    'common.save':     'Save',
    'common.cancel':   'Cancel',
    'common.clear':    'Clear',
    'common.loading':  'Loading…',
    'common.view':     'View',
    'common.guest':    'Guest',
    'common.unidentified': 'Unidentified',
    'common.not_available': 'N/A',
    'common.confirm_cancel': 'Are you sure you want to cancel this reservation?',
    'common.error_occurred':  'An error occurred.',

    'errors.summary_load_failed': 'Failed to load summary.',
};

window.t = function(key) {
    return TRANSLATIONS[key] || key;
};

// ── Settings stub ────────────────────────────────────────────────────────────
window.getSetting = function(key, def) {
    return (DEMO.settings && DEMO.settings[key] !== undefined) ? DEMO.settings[key] : def;
};
window.settingsReady = function() { return Promise.resolve(); };

// ── Language init stub ───────────────────────────────────────────────────────
window.initLanguage = function() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const val = t(key);
        if (val !== key) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = val;
            } else {
                el.textContent = val;
            }
        }
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        el.placeholder = t(key);
    });
    document.documentElement.classList.remove('i18n-loading');
    return Promise.resolve();
};
window.currentLang = 'en';

// ── Theme stub ───────────────────────────────────────────────────────────────
window.applyGlobalTheme = function() { return Promise.resolve(); };

// ── Auth stub ────────────────────────────────────────────────────────────────
window.loadUser = function() {
    window.currentUser            = DEMO.currentUser;
    window.currentUserPermissions = DEMO.currentUserPermissions;
    window.dispatchEvent(new Event('userStateReady'));
    return Promise.resolve({ ok: true, user: DEMO.currentUser, permissions: DEMO.currentUserPermissions });
};
window.clearSession = function() {};

// ── Permissions ───────────────────────────────────────────────────────────────
window.checkPermission = function(perm, perms) {
    const p = perms || window.currentUserPermissions || [];
    return p.includes('*') || p.includes(perm);
};
window.requirePermissionOrPopup = function(perm) { return true; };

window.reScanPermissions = function() {
    const perms = window.currentUserPermissions || [];
    const hasWildcard = perms.includes('*');

    document.querySelectorAll('[data-perm]').forEach(el => {
        const required = el.getAttribute('data-perm');
        const display  = el.getAttribute('data-display') || 'flex';
        const allowed  = hasWildcard || perms.includes(required);
        el.style.display = allowed ? display : 'none';
    });
    document.querySelectorAll('[data-permission]').forEach(el => {
        const required = el.getAttribute('data-permission');
        const display  = el.getAttribute('data-display') || 'grid';
        const allowed  = hasWildcard || perms.includes(required);
        el.style.display = allowed ? display : 'none';
    });
    document.querySelectorAll('[class*="reqPerm-"]').forEach(el => {
        const cls = Array.from(el.classList).find(c => c.startsWith('reqPerm-'));
        if (!cls) return;
        const required = cls.replace('reqPerm-', '');
        const display  = el.getAttribute('data-display') || 'block';
        el.style.display = hasWildcard || perms.includes(required) ? display : 'none';
    });
    // .reqSystem — shown only for 'system' org (hidden in demo)
    document.querySelectorAll('.reqSystem').forEach(el => {
        el.style.display = 'none';
    });
};

window.applyUIPermissions = window.reScanPermissions;

// ── Popup toast ───────────────────────────────────────────────────────────────
window.showPopup = function(msg, type = 'success') {
    let popup = document.getElementById('popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'popup';
        popup.className = 'popup';
        document.body.appendChild(popup);
    }
    popup.textContent = msg;
    popup.className   = `popup ${type} show`;
    clearTimeout(popup._t);
    popup._t = setTimeout(() => { popup.className = `popup ${type}`; }, 2800);
};

// ── Notifications stub ────────────────────────────────────────────────────────
window.initNotificationService = function() {};
window.requestNotificationPermission = function() {
    showPopup('Notifications enabled (demo mode)', 'success');
};

// ── fetchInterceptor stub ─────────────────────────────────────────────────────
// All fetch calls in original code are replaced by calling demo data directly,
// but as a safety net we override fetch to return mock responses.
const _originalFetch = window.fetch;
window.fetch = async function(url, opts) {
    // Let real network calls through for CDN resources
    if (!url.startsWith('/api') && !url.startsWith('/dashboard') && !url.startsWith('/floorplan')) {
        return _originalFetch(url, opts);
    }
    return {
        ok: true,
        status: 200,
        json: async () => ({ ok: true }),
    };
};

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    await initLanguage();
    await loadUser();
    reScanPermissions();
    window.dispatchEvent(new Event('appReady'));
});

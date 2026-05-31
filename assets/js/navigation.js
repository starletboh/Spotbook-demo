/**
 * SPOTBOOK DEMO — NAVIGATION
 * Renders sidebar and wires up logout.
 */

// Determine active page
const _page = location.pathname.split('/').pop().replace('.html','') || 'dashboard';

const NAV_ITEMS = [
    { icon: 'home',      page: 'dashboard',  label: 'Dashboard'  },
    { icon: 'sunbed',    page: 'floorplan',  label: 'Floor Plan' },
    { icon: 'user',      page: 'users',      label: 'Users'      },
    { icon: 'settings',  page: 'settings',   label: 'Settings'   },
    { icon: 'logs',      page: 'logs',       label: 'Audit Logs' },
    { icon: 'analytics', page: 'analytics',  label: 'Analytics'  },
];

function buildSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = NAV_ITEMS.map(item => `
        <button onclick="location.href='${item.page}.html'"
                class="${_page === item.page ? 'active' : ''}"
                title="${item.label}">
            <img src="assets/icons/${item.icon}.png" alt="${item.label}">
        </button>
    `).join('') + `
        <div class="nav-bottom">
            <button onclick="doLogout()" title="Sign Out">
                <img src="assets/icons/logout.png" alt="Sign Out">
            </button>
        </div>
    `;
}

function doLogout() {
    if (confirm('Sign out of the demo?')) {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', buildSidebar);

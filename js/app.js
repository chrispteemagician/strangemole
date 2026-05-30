// Strange Mole Hamlet - Progressive Web App + Safe Portal System

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

// Safe Portal System
class SafePortal {
    constructor() {
        this.externalDomains = [
            'ko-fi.com',
            'patreon.com',
            'genxcess.co.uk',
            'podbean.com',
            'tshirtstudio.com',
            'strangemoleshow.podbean.com'
        ];
        this.init();
    }

    init() {
        // Intercept all external links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            if (this.isExternalLink(href)) {
                e.preventDefault();
                this.showPortal(href, link.textContent);
            }
        });
    }

    isExternalLink(href) {
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) return false;
        
        try {
            const url = new URL(href, window.location.origin);
            return this.externalDomains.some(domain => url.hostname.includes(domain));
        } catch {
            return false;
        }
    }

    showPortal(destination, linkText) {
        const overlay = document.createElement('div');
        overlay.className = 'safe-portal-overlay active';
        overlay.innerHTML = `
            <div class="safe-portal-content">
                <div class="portal-icon">🚪</div>
                <h2>Leaving Strange Mole Hamlet</h2>
                <p>You're heading to:</p>
                <p class="portal-destination">${this.getDomainName(destination)}</p>
                <p style="color: var(--wood-light); font-size: 0.9rem;">
                    This is a safe ally site, but it's outside the FeelFamous ecosystem.
                </p>
                <div class="portal-buttons">
                    <button class="portal-btn back">Stay Here</button>
                    <button class="portal-btn continue">Continue</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Event listeners
        overlay.querySelector('.back').addEventListener('click', () => {
            overlay.remove();
        });

        overlay.querySelector('.continue').addEventListener('click', () => {
            window.open(destination, '_blank');
            overlay.remove();
        });

        // Click outside to close
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        // Escape key to close
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    getDomainName(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname;
        } catch {
            return url;
        }
    }
}

// Initialize Safe Portal
const safePortal = new SafePortal();

// Offline Detection
function updateOnlineStatus() {
    const status = navigator.onLine ? 'online' : 'offline';
    document.body.setAttribute('data-connection', status);
    
    if (!navigator.onLine) {
        showOfflineNotification();
    }
}

function showOfflineNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--forest-dark);
        color: var(--electric-yellow);
        padding: 1rem 2rem;
        border-radius: 10px;
        border: 2px solid var(--electric-yellow);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        z-index: 10000;
        font-weight: 700;
    `;
    notification.textContent = '📡 Offline Mode - Cached content available';
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 5000);
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Install Prompt (PWA)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.className = 'install-btn';
    installBtn.innerHTML = '📱 Install App';
    installBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: var(--electric-purple);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(176, 66, 255, 0.5);
        z-index: 10000;
    `;
    
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            installBtn.remove();
        }
        
        deferredPrompt = null;
    });
    
    document.body.appendChild(installBtn);
}

// Accessibility Enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -100px;
        left: 0;
        background: var(--electric-cyan);
        color: var(--pure-black);
        padding: 1rem;
        font-weight: 700;
        z-index: 100000;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-100px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation enhancement
    document.querySelectorAll('.room-card').forEach(card => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`Page load: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
    });
}

// Export for potential future use
window.StrangeMoleHamlet = {
    version: '1.0.0',
    safePortal,
    updateOnlineStatus
};

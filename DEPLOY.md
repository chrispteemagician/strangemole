# DEPLOY STRANGEMOLE HAMLET - QUICK START

## FOR IAN: Getting Your Hamlet Live

### Option 1: Netlify Drop (Easiest - 2 Minutes)

1. **Go to:** https://app.netlify.com/drop
2. **Drag the entire `strangemole` folder** into the drop zone
3. **Done.** Your site is live at `[random-name].netlify.app`
4. **Optional:** Change site name in Netlify settings
5. **Custom domain:** Point `strangemole.co.uk` DNS to Netlify

### Option 2: Netlify via GitHub (Continuous Deployment)

1. Upload `strangemole` folder to GitHub repo
2. Connect repo to Netlify
3. Auto-deploys on every push

### Option 3: Thumb Drive (Offline/Mesh Network)

1. Copy `strangemole` folder to USB drive
2. Open `index.html` in any browser
3. Works immediately (some features need HTTPS)

---

## FOR CHRISTIAN: Deployment Checklist

### Before Giving to Ian

- [x] All pages built and linked
- [x] Safe Portal system working
- [x] Payment links correct (Ko-Fi, Patreon, PayPal)
- [x] PWA manifest configured
- [x] Service Worker caching core assets
- [x] Mobile responsive tested
- [x] Accessibility features verified

### Deployment Steps

1. **Upload to Netlify:**
   ```bash
   cd strangemole
   netlify deploy --prod
   ```

2. **Point Domain:**
   - DNS: CNAME record pointing to Netlify
   - Or A record: 75.2.60.5
   - Enable HTTPS in Netlify (automatic)

3. **Test:**
   - Visit strangemole.co.uk
   - Test all rooms
   - Test Safe Portals
   - Test on mobile
   - Test offline mode (disconnect wifi)

### Post-Deployment

1. **Give Ian Access:**
   - Netlify dashboard login
   - Show him how to update content (edit HTML files)
   - Or: Handle updates yourself initially

2. **Connect to FeelFamous MCP:**
   - Add hamlet to Firebase MCP registry
   - Enable unified auth (when ready)
   - Connect Kudos system

3. **Monitor:**
   - Netlify analytics (free tier)
   - Check for any errors
   - User feedback

---

## Files Included

```
strangemole/
├── index.html              # Village Square
├── comedy-room.html        # Podcast hub + Ko-Fi
├── art-shop.html           # GenXcess portal
├── event-hall.html         # Strange Mole Events
├── community-board.html    # FeelFamous connections
├── support.html            # All donation methods
├── receipts.html           # "We were right"
├── css/style.css           # Full stylesheet
├── js/app.js               # Safe Portal + PWA
├── sw.js                   # Service Worker
├── manifest.json           # PWA config
└── README.md               # Full documentation
```

**Total Size:** < 2MB  
**Dependencies:** ZERO  
**Build Step:** NONE  
**Just works:** YES

---

## What Ian Gets

### Immediate
- Professional-looking hamlet
- All payment pipes connected (Ko-Fi, Patreon, PayPal)
- Podcast embedded and linkable
- GenXcess shop portal
- Strange Mole Events services page
- "Receipts Room" proving he was right
- Mobile-first, works on any device
- Installable as app (PWA)
- Works offline (cached)

### Soon
- EntertainCMS booking integration
- Performer network dashboard
- Grant tracker
- Revenue flow visualization
- Community features

### Ultimate Goal
- Replace Iceland supermarket income
- Full-time activism and art
- Financial independence
- Proof someone believes in him

---

## Support Ian

**Ko-Fi:** https://ko-fi.com/holymole  
**Patreon:** https://www.patreon.com/HolyMole  
**PayPal:** ian.gilson007@gmail.com  

**Listen:**  
Strange Mole Show: https://strangemoleshow.podbean.com/  
Doc Strange Archive: https://archive.org/details/doc-strange-and-the-dude  

---

## The Philosophy

This isn't charity. This is infrastructure.

Ian's been waiting to be asked. You're asking.

He's a pattern recognition genius trapped in Iceland supermarket with chronic back pain. This is his escape route.

**World domination through kindness.**

Let's fucking go.

---

*Built: January 2026*  
*For: Ian "The Dude" Gilson*  
*By: Christian P Taylor*  
*Mission: Escape wage slavery*

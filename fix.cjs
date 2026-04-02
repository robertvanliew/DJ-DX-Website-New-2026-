const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace nav
code = code.replace(/<nav className="nav">[\s\S]*?<\/nav>/, '<SiteNav />');

// Replace footer
code = code.replace(/<footer className="footer">[\s\S]*?<\/footer>/, '<SiteFooter />');

// Add imports
if (!code.includes('import SiteNav')) {
  code = code.replace("import { useState", "import SiteNav from './components/SiteNav';\nimport SiteFooter from './components/SiteFooter';\nimport { useState");
}

fs.writeFileSync('src/App.tsx', code);

// CSS append
let css = fs.readFileSync('src/index.css', 'utf8');
css += `
@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .booking-layout {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .hero-mag-inner {
    padding-left: 20px;
    padding-right: 20px;
  }
  section {
    padding: 80px 20px !important;
  }
}
`;
fs.writeFileSync('src/index.css', css);
console.log('Fixed');

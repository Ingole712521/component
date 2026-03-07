const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Only modify if it has a sidebar and doesn't already have the Ripple button
            if (content.includes('const sidebarItems') && !content.includes('Ripple Button')) {
                // We're looking for the line that has the "Button" component so we can insert after it.
                // It might look like: { name: "Button", href: "/docs/components/button" }
                // or { name: "Button", href: "/docs/components/button", active: true }
                
                const regex = /(\{\s*name:\s*"Button",\s*href:\s*"\/docs\/components\/button"(?:,\s*active:\s*true)?\s*\},?)/g;
                
                content = content.replace(regex, '$1 { name: "Ripple Button", href: "/docs/components/ripple-button" },');
                
                fs.writeFileSync(fullPath, content);
                console.log('Updated:', fullPath);
            }
        }
    });
}
processDir('d:/Key/work/work/app/docs');

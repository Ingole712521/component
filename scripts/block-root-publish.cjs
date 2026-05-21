console.error(`
ERROR: Do not publish from the repo root (package "work").

This folder is the Next.js demo site, not the npm CLI.

Publish the component library from packages/cli instead:

  cd packages/cli
  npm publish --access public --otp=YOUR_6_DIGIT_CODE

Or from the repo root:

  npm run publish:cli -- --otp=YOUR_6_DIGIT_CODE

Package to publish: @nehal712521/inprogress
`);
process.exit(1);

export const blogSeedPosts = [
  {
    title: 'Demystifying Timing Closure for High-Speed Designs',
    slug: 'demystifying-timing-closure',
    image: '/images/blog-default.svg',
    tags: ['timing', 'sta', 'flow'],
    content: `
## Why timing closure matters

When pushing a design beyond the gigahertz barrier, every picosecond matters. In this post I break down how I instrument PrimeTime and OpenSTA to visualize critical paths, identify incremental ECO opportunities, and iterate quickly on constraints.

## Techniques covered

- Building repeatable Tcl macros for rapid what-if analysis
- Leveraging waveform signatures to correlate dynamic and static failures
- Automating regression snapshots using GitHub Actions runners

By the end, you should have a practical toolkit for closing timing without getting lost in the noise.
    `.trim()
  },
  {
    title: 'Crafting Reusable Verification IP for RISC-V SoCs',
    slug: 'reusable-verification-ip-riscv',
    image: '/images/blog-default.svg',
    tags: ['verification', 'riscv', 'uvm'],
    content: `
## The challenge

Verification debt can derail even the most elegant RTL. I document my approach for building modular, reusable UVM components that scale across multiple RISC-V projects.

## Key insights

- Transaction-level scoreboards that catch protocol violations early
- Parameterised agents to support variant cores without rewrites
- Hooking coverage metrics into nightly regressions for instant feedback

If you are building open silicon, you will appreciate how these patterns keep testbenches lean and adaptable.
    `.trim()
  },
  {
    title: 'EDA Scripting Tips: Glueing Flows with Python & Tcl',
    slug: 'eda-scripting-tips',
    image: '/images/blog-default.svg',
    tags: ['automation', 'python', 'tcl'],
    content: `
## Automate the boring bits

Every tape-out sprint involves countless repetitive steps. I share a collection of scripts that streamline RTL linting, constraint validation, and PnR handoffs.

## Highlighted utilities

- Python orchestration layer that calls synthesis, STA, and power analysis with a single command
- Consistent report parsing with Pandas for quick diffing between revisions
- Smart failure notifications posted directly to Slack for fast triage

These helpers save hours every week and keep teams aligned while flows evolve.
    `.trim()
  }
];


import type { KiosqueConfig } from './packages/pipeline/src/config.ts';

const config: Partial<KiosqueConfig> = {
  // Hébergement : pages seules. L'adaptateur reste markdown.
  source: { adapter: 'markdown', options: { root: new URL('.', import.meta.url).pathname } },
  editorial: { mode: 'git-sveltia' },
  deploy: {
    basePath: "/la-boussole",
  },
  demoNotice: 'Journal FICTIF de test — le Cégep de Val-Fictif et ses personnes n’existent pas',
  demoContent: false,
  feedLimit: 30,
};

export default config;

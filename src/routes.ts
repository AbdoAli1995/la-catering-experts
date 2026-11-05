export type RouteView =
  | 'calculator' | 'taco-catering' | 'companies' | 'about' | 'contact'
  | 'add-business' | 'privacy' | 'terms' | 'do-not-sell';
export type View = RouteView | 'not-found';

export const SITE_URL = 'https://losangelescateringexperts.com';

export const VIEW_PATHS: Record<RouteView, string> = {
  'calculator': '/',
  'taco-catering': '/taco-catering-los-angeles',
  'companies': '/companies',
  'about': '/about',
  'contact': '/contact',
  'add-business': '/add-business',
  'privacy': '/privacy',
  'terms': '/terms',
  'do-not-sell': '/do-not-sell',
};

const ALIASES: Record<string, RouteView> = {
  '/calculator': 'calculator',
  '/home': 'calculator',
  '/taco-catering': 'taco-catering',
  '/taco-catering-los-angeles.html': 'taco-catering',
  '/companies.html': 'companies',
  '/add-business.html': 'add-business',
  '/privacy-policy': 'privacy',
  '/terms.html': 'terms',
  '/do-not-sell.html': 'do-not-sell',
};

const PATH_TO_VIEW: Record<string, RouteView> = {
  ...(Object.fromEntries(
    Object.entries(VIEW_PATHS).map(([view, path]) => [path, view])
  ) as Record<string, RouteView>),
  ...ALIASES,
};

// Accepts 'about', '/about', '#about', '#/about', '/about/'
export function normalizeView(input: string): RouteView | null {
  const cleaned =
    '/' + input.replace(/^[#/]+/, '').replace(/\/+$/, '').toLowerCase();
  return PATH_TO_VIEW[cleaned] ?? null;
}

export function pathToView(pathname: string): View {
  return normalizeView(pathname) ?? 'not-found';
}

export const PAGE_META: Record<View, { title: string; description: string }> = {
  'calculator': {
    title: 'LA Catering Cost Calculator & Caterer Directory',
    description:
      'Estimate your Los Angeles catering cost by event type and guest count, then compare local caterers, private chefs and taco bars across LA County.',
  },
  'taco-catering': {
    title: 'Taco Catering Los Angeles: Taco Bar Guide & Calculator',
    description:
      'Plan a taco bar for your LA event: tacos per guest, protein amounts, tortillas and sides, plus local taco caterers.',
  },
  'companies': {
    title: 'Los Angeles Catering Directory: Compare Caterers',
    description:
      'Browse and filter catering companies, private chefs and food trucks across Greater Los Angeles.',
  },
  'about': {
    title: 'About Los Angeles Catering Experts',
    description:
      'Learn how Los Angeles Catering Experts builds its catering cost estimates and compiles its local caterer directory.',
  },
  'contact': {
    title: 'Contact Los Angeles Catering Experts',
    description:
      'Questions about catering costs, listings or removals? Contact the Los Angeles Catering Experts team.',
  },
  'add-business': {
    title: 'List Your Catering Business in Los Angeles',
    description:
      'Add your catering company, private chef or food truck to the Los Angeles Catering Experts directory.',
  },
  'privacy': {
    title: 'Privacy Policy | Los Angeles Catering Experts',
    description:
      'How Los Angeles Catering Experts collects, uses and protects your personal information.',
  },
  'terms': {
    title: 'Terms of Use | Los Angeles Catering Experts',
    description:
      'Terms of use for the Los Angeles Catering Experts website, estimator and directory.',
  },
  'do-not-sell': {
    title: 'Do Not Sell or Share My Information | LA Catering Experts',
    description:
      'Opt out of the sale or sharing of your personal information on Los Angeles Catering Experts.',
  },
  'not-found': {
    title: 'Page Not Found | Los Angeles Catering Experts',
    description: 'The page you are looking for does not exist.',
  },
};

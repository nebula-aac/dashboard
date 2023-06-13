import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function usePageTitle() {
    const router = useRouter();

    const pageTitle = useMemo(() => {
        // Define a mapping of page paths to their corresponding titles
        const pageTitleMap = {
            '/': 'Dashboard',
            '/settings': 'Settings',
            '/extensions': 'Extensions',
            '/smi_results': 'SMI Results',
            '/404': '404 - Page Not Found',
            // Add more pages and titles as needed
        };

        // Look up the title for the current page path
        const pageTitle = pageTitleMap[router.pathname] || 'Meshery';

        return pageTitle;
    }, [router.pathname]);

    return pageTitle;
}
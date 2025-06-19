
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsService } from '@/services/analyticsService';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageName = location.pathname === '/' ? 'Home' : 
                    location.pathname.replace('/', '').replace('-', ' ');
    
    analyticsService.trackPageView(pageName, {
      path: location.pathname,
      search: location.search,
    });
  }, [location]);

  return {
    trackToolUsage: analyticsService.trackToolUsage.bind(analyticsService),
    trackClick: analyticsService.trackClick.bind(analyticsService),
    trackError: analyticsService.trackError.bind(analyticsService),
    setUserId: analyticsService.setUserId.bind(analyticsService),
    getAnalyticsSummary: analyticsService.getAnalyticsSummary.bind(analyticsService),
  };
};

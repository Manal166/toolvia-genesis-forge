interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: string;
  sessionId: string;
  userId?: string;
}

class AnalyticsService {
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.userId = this.getUserId();
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('codeboost_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('codeboost_session_id', sessionId);
    }
    return sessionId;
  }

  private getUserId(): string | undefined {
    return localStorage.getItem('codeboost_user_id') || undefined;
  }

  private createEvent(event: string, properties: Record<string, any> = {}): AnalyticsEvent {
    return {
      event,
      properties: {
        ...properties,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      },
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
    };
  }

  private storeEvent(analyticsEvent: AnalyticsEvent) {
    try {
      const events = JSON.parse(localStorage.getItem('codeboost_analytics') || '[]');
      events.push(analyticsEvent);
      
      // Keep only last 1000 events to prevent storage bloat
      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }
      
      localStorage.setItem('codeboost_analytics', JSON.stringify(events));
      console.log('Analytics event tracked:', analyticsEvent);
    } catch (error) {
      console.error('Failed to store analytics event:', error);
    }
  }

  // Track page views
  trackPageView(pageName: string, additionalProps: Record<string, any> = {}) {
    const event = this.createEvent('page_view', {
      page_name: pageName,
      path: window.location.pathname,
      ...additionalProps,
    });
    this.storeEvent(event);
  }

  // Track tool usage
  trackToolUsage(toolId: string, action: string, additionalProps: Record<string, any> = {}) {
    const event = this.createEvent('tool_usage', {
      tool_id: toolId,
      action,
      ...additionalProps,
    });
    this.storeEvent(event);
  }

  // Track button clicks
  trackClick(element: string, additionalProps: Record<string, any> = {}) {
    const event = this.createEvent('click', {
      element,
      ...additionalProps,
    });
    this.storeEvent(event);
  }

  // Track errors
  trackError(error: string, context: string, additionalProps: Record<string, any> = {}) {
    const event = this.createEvent('error', {
      error,
      context,
      ...additionalProps,
    });
    this.storeEvent(event);
  }

  // Get analytics summary (for admin/debug purposes)
  getAnalyticsSummary() {
    try {
      const events = JSON.parse(localStorage.getItem('codeboost_analytics') || '[]');
      const summary = {
        totalEvents: events.length,
        sessionId: this.sessionId,
        userId: this.userId,
        recentEvents: events.slice(-10),
        eventTypes: events.reduce((acc: Record<string, number>, event: AnalyticsEvent) => {
          acc[event.event] = (acc[event.event] || 0) + 1;
          return acc;
        }, {}),
      };
      return summary;
    } catch (error) {
      console.error('Failed to get analytics summary:', error);
      return null;
    }
  }

  // Set user ID for tracking
  setUserId(userId: string) {
    this.userId = userId;
    localStorage.setItem('codeboost_user_id', userId);
  }
}

export const analyticsService = new AnalyticsService();

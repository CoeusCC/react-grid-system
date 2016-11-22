/* global window */

export const getViewPort = ({ phone, tablet }) => {
  let viewport = 1600;
  if (tablet) viewport = 768; // iPad portrait width
  if (phone) viewport = 375; // iPhone 6 width
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

export const defaultBreakpoints = [576, 768, 992, 1200];

export const defaultContainerWidths = [540, 750, 960, 1140];

export const defaultGutterWidth = 30;

export const getScreenClass = ({ phone, tablet, breakpoints }) => {
  const theBreakpoints = breakpoints && breakpoints.length >= 4 ? breakpoints : defaultBreakpoints;

  const viewport = getViewPort({ phone, tablet });

  if (viewport >= theBreakpoints[3]) { return 'xl'; }
  if (viewport >= theBreakpoints[2]) { return 'lg'; }
  if (viewport >= theBreakpoints[1]) { return 'md'; }
  if (viewport >= theBreakpoints[0]) { return 'sm'; }
  return 'xs';
};

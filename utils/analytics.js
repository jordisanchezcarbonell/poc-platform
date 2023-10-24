import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-D2Y8DQQZZB"); // Replace with your Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

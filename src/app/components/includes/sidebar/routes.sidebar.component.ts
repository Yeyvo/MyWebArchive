declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/projects/dashboard",
    title: "Projects Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/users/usersdashboard",
    title: "Students",
    icon: "icon-single-02",
    class: ""
  },

];

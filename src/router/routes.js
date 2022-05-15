const layout = () => import( /* webpackChunkName: '' */ "../layouts/LayoutLandingPage");

function page(path) {
  return () => import( /* webpackChunkName: '' */ `../pages/${path}`);
}
import DefaultBody from "../pages/DefaultBody";
import ConfirmationDemand from "../pages/Sections/ConfirmationDemand";

export default [{
    path: "/",
    component: layout,
    children:[
      {
          path: "/",
          name: "DefaultBody",
          component: DefaultBody
        },
        {
          path: "/confirmation",
          name: "ConfirmationDemand",
          component: ConfirmationDemand
        },
    ]
  },
  {
    path: "/uikit",
    name: "uikit",
    component: page("Uikit"),
  },
];
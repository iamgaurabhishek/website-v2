import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
  Fluid as FluidLayout,
  Fixed as FixedLayout,
  BrickMmo as BrickMmoLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
  Commissions as CommissionsView,
  CommissionsCdmo as CommissionsCdmoView,
  CommissionsHumber as CommissionsHumberView,
  CommissionsBrevisRefero as CommissionsBrevisRefero,
  Education as EducationView,
  Systems as SystemsView,
  Research as ResearchView,
  GetStarted as GetStartedView,
  Bio as BioView,
  SystemPanel as SystemPanelView,
} from './views/pages';

// Landing pages
import {
  // Home as HomeView,
  Advertisement as AdvertisementView,
  PaymentApp as PaymentAppView,
  Marketing as MarketingView,
  Software as SoftwareView,
  Course as CourseView,
  Crypto as CryptoView,
  DesignAgency as DesignAgencyView,
  Consulting as ConsultingView,
  Application as ApplicationView,
  DomainHosting as DomainHostingView,
  Travel as TravelView,
  Event as EventView,
} from './views/landingPages';

// Supporting pages
import {
  About as AboutView,
  Services as ServicesView,
  Contact as ContactView,
  Pricing as PricingView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Privacy as PrivacyView,
  ComingSoon as ComingSoonView,
  MaintenanceMode as MaintenanceModeView,
  Cover as CoverView,
  NotFound as NotFoundView,
} from './views/supportingPages';

// Authentication pages
import {
  Login as LoginView,
  LoginSimple as LoginSimpleView,
  Signup as SignupView,
  SignupSimple as SignupSimpleView,
  ForgotPassword as ForgotPasswordView,
  ForgotPasswordSimple as ForgotPasswordSimpleView,
} from './views/authPages';

// Documentation pages
import {
  Introduction as IntroductionView,
  QuickStart as QuickStartView,
  Colors as ColorsView,
  TypographyComponent as TypographyComponentView,
  Shadows as ShadowsView,
  ContainerComponent as ContainerComponentView,
  Layouts as LayoutsView,
  Plugins as PluginsView,
  Support as SupportView,
  Icons as IconsView,
  Illustrations as IllustrationsView,
  ChangeLog as ChangeLogView,
} from './views/docs';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            title="index"
            {...matchProps}
            component={HomeView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/bio"
        element={((matchProps) => (
          <WithLayout
            title="Bio 2024"
            {...matchProps}
            component={BioView}
            layout={BrickMmoLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/SystemPanel"
        element={((matchProps) => (
          <WithLayout
            title="System Panel"
            {...matchProps}
            component={SystemPanelView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
        

      <Route
        exact
        path="/commissions"
        element={((matchProps) => (
          <WithLayout
            title="commissions"
            {...matchProps}
            component={CommissionsView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/commissions-humber"
        element={((matchProps) => (
          <WithLayout
            title="humber"
            {...matchProps}
            component={CommissionsHumberView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/commissions-cdmo"
        element={((matchProps) => (
          <WithLayout
            title="cdmo"
            {...matchProps}
            component={CommissionsCdmoView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/commissions-brevisrefero"
        element={((matchProps) => (
          <WithLayout
            title="brevisrefero"
            {...matchProps}
            component={CommissionsBrevisRefero}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/education"
        element={((matchProps) => (
          <WithLayout
            title="education"
            {...matchProps}
            component={EducationView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/systems"
        element={((matchProps) => (
          <WithLayout
            title="systems"
            {...matchProps}
            component={SystemsView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/research"
        element={((matchProps) => (
          <WithLayout
            title="research"
            {...matchProps}
            component={ResearchView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/get-started"
        element={((matchProps) => (
          <WithLayout
            title="get started"
            {...matchProps}
            component={GetStartedView}
            layout={BrickMmoLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/landing-advertisement"
        element={((matchProps) => (
          <WithLayout
            title="landing advertisement"
            {...matchProps}
            component={AdvertisementView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-payment-app"
        element={((matchProps) => (
          <WithLayout
            title="landing payment app"
            {...matchProps}
            component={PaymentAppView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-marketing"
        element={((matchProps) => (
          <WithLayout
            title="landing marketing"
            {...matchProps}
            component={MarketingView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-software-company"
        element={((matchProps) => (
          <WithLayout
            title="landing software company"
            {...matchProps}
            component={SoftwareView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-course"
        element={((matchProps) => (
          <WithLayout
            title="landing course"
            {...matchProps}
            component={CourseView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-crypto"
        element={((matchProps) => (
          <WithLayout
            title="landing crypto"
            {...matchProps}
            component={CryptoView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-design-agency"
        element={((matchProps) => (
          <WithLayout
            title="landing design agency"
            {...matchProps}
            component={DesignAgencyView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-consulting"
        element={((matchProps) => (
          <WithLayout
            title="landing consulting"
            {...matchProps}
            component={ConsultingView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-application"
        element={((matchProps) => (
          <WithLayout
            title="landing application"
            {...matchProps}
            component={ApplicationView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-domain-hosting"
        element={((matchProps) => (
          <WithLayout
            title="landing domain hosting"
            {...matchProps}
            component={DomainHostingView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-travel"
        element={((matchProps) => (
          <WithLayout
            title="landing travel"
            {...matchProps}
            component={TravelView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/landing-event"
        element={((matchProps) => (
          <WithLayout
            title="landing event"
            {...matchProps}
            component={EventView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-about"
        element={((matchProps) => (
          <WithLayout
            title="about"
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-services"
        element={((matchProps) => (
          <WithLayout
            title="services"
            {...matchProps}
            component={ServicesView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-contact"
        element={((matchProps) => (
          <WithLayout
            title="contact"
            {...matchProps}
            component={ContactView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-pricing"
        element={((matchProps) => (
          <WithLayout
            title="pricing"
            {...matchProps}
            component={PricingView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-customers"
        element={((matchProps) => (
          <WithLayout
            title="customers"
            {...matchProps}
            component={CustomersView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-hire-us"
        element={((matchProps) => (
          <WithLayout
            title="hire us"
            {...matchProps}
            component={HireUsView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-faq"
        element={((matchProps) => (
          <WithLayout
            title="faq"
            {...matchProps}
            component={FaqView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-privacy"
        element={((matchProps) => (
          <WithLayout
            title="privacy"
            {...matchProps}
            component={PrivacyView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-coming-soon"
        element={((matchProps) => (
          <WithLayout
            title="coming soon"
            {...matchProps}
            component={ComingSoonView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-maintenance-mode"
        element={((matchProps) => (
          <WithLayout
            title="maintenance mode"
            {...matchProps}
            component={MaintenanceModeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-cover"
        element={((matchProps) => (
          <WithLayout
            title="cover"
            {...matchProps}
            component={CoverView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-login"
        element={((matchProps) => (
          <WithLayout
            title="login"
            {...matchProps}
            component={LoginView}
            layout={FluidLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-login-simple"
        element={((matchProps) => (
          <WithLayout
            title="login simple"
            {...matchProps}
            component={LoginSimpleView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-signup"
        element={((matchProps) => (
          <WithLayout
            title="signup"
            {...matchProps}
            component={SignupView}
            layout={FluidLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-signup-simple"
        element={((matchProps) => (
          <WithLayout
            title="signup simple"
            {...matchProps}
            component={SignupSimpleView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-forgot-password"
        element={((matchProps) => (
          <WithLayout
            title="forgot password"
            {...matchProps}
            component={ForgotPasswordView}
            layout={FluidLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-forgot-password-simple"
        element={((matchProps) => (
          <WithLayout
            title="forgot password simple"
            {...matchProps}
            component={ForgotPasswordSimpleView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-introduction"
        element={((matchProps) => (
          <WithLayout
            title="introduction"
            {...matchProps}
            component={IntroductionView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-quick-start"
        element={((matchProps) => (
          <WithLayout
            title="quick start"
            {...matchProps}
            component={QuickStartView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-colors"
        element={((matchProps) => (
          <WithLayout
            title="colors"
            {...matchProps}
            component={ColorsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-typography"
        element={((matchProps) => (
          <WithLayout
            title="typography"
            {...matchProps}
            component={TypographyComponentView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-shadows"
        element={((matchProps) => (
          <WithLayout
            title="shadows"
            {...matchProps}
            component={ShadowsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-container"
        element={((matchProps) => (
          <WithLayout
            title="container"
            {...matchProps}
            component={ContainerComponentView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-layouts"
        element={((matchProps) => (
          <WithLayout
            title="layouts"
            {...matchProps}
            component={LayoutsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-plugins"
        element={((matchProps) => (
          <WithLayout
            title="plugins"
            {...matchProps}
            component={PluginsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-icons"
        element={((matchProps) => (
          <WithLayout
            title="icons"
            {...matchProps}
            component={IconsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-illustrations"
        element={((matchProps) => (
          <WithLayout
            title="illustrations"
            {...matchProps}
            component={IllustrationsView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-support"
        element={((matchProps) => (
          <WithLayout
            title="support"
            {...matchProps}
            component={SupportView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/docs-change-log"
        element={((matchProps) => (
          <WithLayout
            title="change log"
            {...matchProps}
            component={ChangeLogView}
            layout={FixedLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-not-found"
        element={((matchProps) => (
          <WithLayout
            title="not found"
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        path="*"
        element={((matchProps) => (
          <WithLayout
            title="all"
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        path="/privacy-policy"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PrivacyView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        path="/privacy-policy"
        element={((matchProps) => (
          <WithLayout
            title="privacy policy"
            {...matchProps}
            component={PrivacyView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
